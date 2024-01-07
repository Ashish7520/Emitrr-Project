import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: 0,
  language: "",
};

const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const language = action.payload;
      localStorage.setItem("language", language);
      state.language = language;
    },
    questionCounter: (state) => {
      if (state.question < 6) {
        state.question++;
      }
    },
    resetProfile: (state) => {
      state.language = "";
      state.question = 0;
    },
  },
});

export const quizAction = quizSlice.actions;

export default quizSlice.reducer;
