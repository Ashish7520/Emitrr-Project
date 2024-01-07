const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");

//to generate the JWT token
function generateAccessToken(id, username) {
  return jwt.sign(
    { userId: id, username: username },
    "jksjdfjkdkgjfljg5412154sghjshjvc556dfdjjv"
  );
}

//to signup the user
exports.signup = async (req, res) => {
  try {
    console.log("done");
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const saltRounds = 10;

    if (
      username == undefined ||
      username.length === 0 ||
      email == undefined ||
      email.length === 0 ||
      password == undefined ||
      password.length === 0
    ) {
      return res
        .status(400)
        .json({ err: "bad parameters. something is missing" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

//to login the user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
      });
    }
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token: generateAccessToken(user.id, user.username),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error, success: false });
  }
};

//to reset the user profile
exports.resetProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId, "userId");
    const reset = await User.update(
      {
        totalScore: 0,
        correctAnswer: 0,
        incorrectAnswer: 0,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    console.log(reset);

    res.json({ msg: "reser profile successfully", reset });
  } catch (error) {
    console.log(error);
  }
};

//to get the leaderboard
exports.getLeaderBoard = async (req, res) => {
  try {
    const leaderboard = await User.findAll({
      attributes: ["id", "username", "totalScore"],
      order: [["totalScore", "DESC"]],
    });

    res.json({ leaderboard });
  } catch (error) {
    console.log(error);
  }
};
