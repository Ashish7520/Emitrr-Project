const sequelize = require("sequelize");
const Question = require("../model/questions");
const data = require("../util/data");
const User = require("../model/user");
const UserQuestions = require("../model/userQuestions");

//to post all the question of quiz
exports.postQuestions = async (req, res) => {
  try {
    await Question.bulkCreate(data);
    res.status(201).json({ msg: "Questions inserted successfully!" });
  } catch (error) {
    console.error("Error inserting questions:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error: Could not insert questions" });
  }
};

//to get single question from database
exports.getQuestions = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("userId -->", userId);
    const language = req.params.language;

    // Retrieve attempted question IDs for the user
    const attemptedQuestionIds = await UserQuestions.findAll({
      attributes: ["QuestionId"],
      where: { userId: userId, isAttempted: true },
    });

    // Extract the IDs from the result
    const attemptedIds = attemptedQuestionIds.map((item) => item.QuestionId);

    const userPerformance = await getUserPerformance(userId);
    const userSkillLevel = calculateUserSkillLevel(userPerformance);
    const difficulty = calculateDifficulty(userSkillLevel);

    // Find a new question whose ID is not in the list of attempted IDs
    const question = await Question.findOne({
      attributes: [
        "question_text",
        "option_a",
        "option_b",
        "option_c",
        "option_d",
        "difficulty",
        "id",
      ],
      where: {
        id: { [sequelize.Op.notIn]: attemptedIds },
        difficulty: difficulty,
        language: language,
      },
      order: [sequelize.literal("RAND()")],
    });

    if (question) {
      // Mark the retrieved question as attempted in the UserQuestions table
      await UserQuestions.create({
        userId: userId,
        QuestionId: question.id,
        isAttempted: true,
      });

      res.status(200).json(question);
    } else {
      res.status(404).json({ message: "No more questions available." });
    }
  } catch (error) {
    console.error("Error fetching or updating question:", error);
    res.status(500).json({
      error: "Internal Server Error: Could not fetch or update question",
    });
  }
};

//to get the answer of given question
exports.getAnswer = async (req, res) => {
  const questionId = req.params.questionId;
  const selectedOption = req.params.selectedOption;
  const userId = req.user.id;

  const answer = await Question.findOne({
    attributes: ["correct_option", "difficulty"],
    where: { id: questionId },
  });

  let score = 0;

  //find score based of whether given answer is true or false
  if (selectedOption == answer.correct_option) {
    if (answer.difficulty === "easy") {
      score = 1;
    } else if (answer.difficulty === "medium") {
      score = 3;
    } else if (answer.difficulty === "hard") {
      score = 5;
    }
  }

  if (score > 0) {
    let correct = await User.findOne({
      attributes: ["correctAnswer"],
      where: { id: userId },
    });

    let totalScore = await User.findOne({
      attributes: ["totalScore"],
      where: { id: userId },
    });

    console.log(totalScore.totalScore, "total");

    const updatedUser = await User.update(
      {
        correctAnswer: correct.correctAnswer + 1,
        totalScore: totalScore.totalScore + score,
      },
      {
        where: { id: userId },
      }
    );
    res.json(true);
  } else if (score === 0) {
    let incorrect = await User.findOne({
      attributes: ["incorrectAnswer"],
      where: { id: userId },
    });

    const updatedUser = await User.update(
      {
        incorrectAnswer: incorrect.incorrectAnswer + 1,
      },
      {
        where: { id: userId },
      }
    );
    res.status(200).json(false);
  }
};

//to delete the questions
exports.deleteQuestion = async (req, res) => {
  try {
    const deleteQuestion = await Question.destroy({
      where: {},
      truncate: true,
    });
    res.json({ msg: "deleted" });
  } catch (error) {
    console.log(error);
  }
};

async function getUserPerformance(userId) {
  const user = await User.findOne({
    where: { id: userId },
    attributes: ["correctAnswer", "incorrectAnswer"],
  });

  return {
    correctAnswers: user.correctAnswer || 0,
    incorrectAnswers: user.incorrectAnswer || 0,
  };
}

function calculateUserSkillLevel(userPerformance) {
  return userPerformance.correctAnswers - userPerformance.incorrectAnswers;
}

function calculateDifficulty(userSkillLevel) {
  console.log(userSkillLevel, "userskill");
  if (userSkillLevel <= 1) {
    return "easy";
  } else if (userSkillLevel <= 3) {
    return "medium";
  } else {
    return "hard";
  }
}
