const Sequelize = require("sequelize");
const sequelize = require("../util/database");

//to define the users model
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: Sequelize.STRING,
  totalScore: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  correctAnswer: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  incorrectAnswer: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
