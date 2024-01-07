import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizAction } from "../store/quiz";
import styles from "./Profile.module.css";

const LanguageSelectionPopup = ({ onClose, onSelectLanguage }) => {
  const handleLanguageSelect = (language) => {
    onSelectLanguage(language);
    onClose();
  };

  return (
    <div className={styles.languagePopup}>
      <div
        className={styles.languageOption}
        onClick={() => handleLanguageSelect("English")}
      >
        English
      </div>
      <div
        className={styles.languageOption}
        onClick={() => handleLanguageSelect("Hindi")}
      >
        Hindi
      </div>
    </div>
  );
};

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  const quizHandler = () => {
    setShowLanguagePopup(true);
  };

  const resetHandler = () => {
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
        console.log("Reset successful");
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    performReset();
  };

  const closeLanguagePopup = () => {
    setShowLanguagePopup(false);
  };

  const handleLanguageSelection = (selectedLanguage) => {
    dispatch(quizAction.changeLanguage(selectedLanguage));
    console.log("Selected Language:", selectedLanguage);
    history.replace("/quiz");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>Profile Page</div>
      <div className={styles.profileBtn}>
        <button className={styles.actionButton} onClick={quizHandler}>
          Start Quiz
        </button>
        <button className={styles.actionButton} onClick={resetHandler}>
          Reset
        </button>
      </div>
      {showLanguagePopup && (
        <LanguageSelectionPopup
          onClose={closeLanguagePopup}
          onSelectLanguage={handleLanguageSelection}
        />
      )}
    </div>
  );
};

export default Profile;
