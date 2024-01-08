import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: 0,
  language: "",
  progress: 0,
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
      state.progress = 0;
    },
    progressCounter: (state) => {
      state.progress++;
    },
  },
});

export const quizAction = quizSlice.actions;

export default quizSlice.reducer;
