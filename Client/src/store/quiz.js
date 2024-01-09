import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: 1,
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
      state.question++;
      // if (state.question < 6) {

      // }
    },
    resetProfile: (state) => {
      state.language = "";
      state.question = 1;
      state.progress = 0;
    },
    progressCounter: (state) => {
      state.progress++;
    },
  },
});

export const quizAction = quizSlice.actions;

export default quizSlice.reducer;
