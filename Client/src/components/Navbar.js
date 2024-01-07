import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    const deleteQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/quiz/questions", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response:", data);
      } catch (error) {
        console.log(error);
      }
    };
    deleteQuestions();
    console.log("User logout successfully");
  };

  return (
    <div className={styles.sidebar}>
      {isLogin ? <Link to="/profile">Profile</Link> : ""}
      {isLogin ? <Link to="/quiz">Quiz</Link> : ""}
      {isLogin ? <Link to="/leaderboard">Leaderboard</Link> : ""}
      {!isLogin ? <Link to="/newuser">Login</Link> : ""}
      {isLogin ? (
        <span onClick={logoutHandler} className={styles.logoutLink}>
          Logout
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
