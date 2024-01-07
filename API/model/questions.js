const Sequelize = require("sequelize");
const sequelize = require("../util/database");

//to define the questions model
const Question = sequelize.define("Question", {
  question_text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  option_a: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  option_b: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  option_c: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  option_d: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  correct_option: {
    type: Sequelize.CHAR(1),
    allowNull: false,
  },
  language: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  difficulty: {
    type: Sequelize.ENUM("easy", "medium", "hard"),
    allowNull: false,
  },
});

module.exports = Question;
