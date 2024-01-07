const jwt = require("jsonwebtoken");
const User = require("../model/user");

// to authenticate the user using jwt token
const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = jwt.verify(token, "jksjdfjkdkgjfljg5412154sghjshjvc556dfdjjv");
    User.findByPk(user.userId)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({ success: false });
      });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false });
  }
};

module.exports = authenticate;
