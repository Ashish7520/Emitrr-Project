const express = require("express");
const router = express.Router();

const quizController = require("../controller/quiz");
const userAuthentication = require("../middleware/auth");

router.post("/questions", quizController.postQuestions);
router.get(
  "/questions/:language/:questionNumber",
  userAuthentication,
  quizController.getQuestions
);
router.get(
  "/answer/:questionId/:selectedOption",
  userAuthentication,
  quizController.getAnswer
);

router.delete("/questions", quizController.deleteQuestion);

module.exports = router;
