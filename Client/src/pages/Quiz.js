import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const maxQuestionCount = 6;
  const [next, setNext] = useState(1);
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);
  const token = localStorage.getItem("token");
  const history = useHistory();

  const language = useSelector((state) => state.quiz.language);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/quiz/questions/${language}/${next}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          const err = await response.json();
          console.log(err);
          alert(err.error.message);
          throw new Error(err.message);
        }

        const data = await response.json();
        setQuestion(data);
        setSelectedOption(null);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestion();
  }, [next, token]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const submitHandler = async () => {
    if (selectedOption !== null) {
      try {
        const questionId = question.id;
        console.log("Selected Option:", selectedOption, questionId);
        const response = await fetch(
          `http://localhost:3001/quiz/answer/${questionId}/${selectedOption}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          const err = await response.json();
          console.log(err);
          alert("Error checking answer. Please try again.");
          throw new Error(err.message);
        }

        const data = await response.json();
        console.log(data);

        alert(data ? "Correct!" : "Incorrect!");

        setProgress((prevProgress) => prevProgress + 1);
        if (next < maxQuestionCount) {
          setNext((prevNext) => prevNext + 1);
        } else {
          alert("Reset the quiz");
          const performReset = async () => {
            try {
              const response = await fetch("http://localhost:3001/user/reset", {
                method: "POST",
                headers: {
                  Authorization: token,
                },
                body: {},
              });

              if (!response.ok) {
                const err = await response.json();
                console.log(err);
                alert(err.error.message);
                throw new Error(err.message);
              }

              const data = await response.json();
              console.log(data);
              dispatch(quizAction.resetProfile());
              console.log("reset successfully");
            } catch (error) {
              console.log(error);
            }
          };
          performReset();
          history.replace("/profile");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please select an option before submitting.");
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizTitle}>Quiz Page</div>
      {language ? (
        question ? (
          <>
            <div className={styles.difficulty}>
              Difficulty: {question.difficulty}
            </div>
            <div className={styles.questionText}>{question.question_text}</div>
            <form>
              <label className={styles.optionsLabel}>
                <input
                  type="radio"
                  name="options"
                  value="option_a"
                  checked={selectedOption === "A"}
                  onChange={() => handleOptionChange("A")}
                />
                {question.option_a}
              </label>
              <label className={styles.optionsLabel}>
                <input
                  type="radio"
                  name="options"
                  value="option_b"
                  checked={selectedOption === "B"}
                  onChange={() => handleOptionChange("B")}
                />
                {question.option_b}
              </label>
              <label className={styles.optionsLabel}>
                <input
                  type="radio"
                  name="options"
                  value="option_c"
                  checked={selectedOption === "C"}
                  onChange={() => handleOptionChange("C")}
                />
                {question.option_c}
              </label>
              <label className={styles.optionsLabel}>
                <input
                  type="radio"
                  name="options"
                  value="option_d"
                  checked={selectedOption === "D"}
                  onChange={() => handleOptionChange("D")}
                />
                {question.option_d}
              </label>
            </form>
            <button className={styles.submitButton} onClick={submitHandler}>
              Submit
            </button>
          </>
        ) : (
          <p>Loading question...</p>
        )
      ) : (
        <p>Choose language from profile - start Quiz</p>
      )}
      <div className={styles.progressBar}>
        <progress value={progress} max={maxQuestionCount}></progress>
      </div>
    </div>
  );
};

export default Quiz;
