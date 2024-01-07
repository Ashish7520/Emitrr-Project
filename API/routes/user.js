const express = require("express");
const router = express.Router();

const userController = require("../controller/user");
const userAuthentication = require("../middleware/auth");

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.post("/reset", userAuthentication, userController.resetProfile);

router.get("/leaderboard", userController.getLeaderBoard);

module.exports = router;
