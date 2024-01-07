import authReducer from "./auth";
import quizReducer from "./quiz";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { auth: authReducer, quiz: quizReducer },
});

export default store;
