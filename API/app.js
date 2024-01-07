const express = require("express");
const app = express();

const sequelize = require("./util/database");

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const questionRoute = require("./routes/quiz");
app.use("/quiz", questionRoute);

sequelize
  .sync()
  .then((result) => {
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.error("Sequelize Sync Error:", err);
  });
