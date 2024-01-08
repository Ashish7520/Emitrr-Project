const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const UserQuestions = sequelize.define("UserQuestions", {
  isAttempted: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = UserQuestions;
