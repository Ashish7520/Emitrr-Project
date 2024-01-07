import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import styles from "./newuser.module.css";

const User = () => {
  const [isLogin, setIsLogin] = useState(false);

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputUsernameRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const loginHandler = () => {
    const data = !isLogin;
    setIsLogin(data);
  };

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      const enteredEmail = inputEmailRef.current.value;
      const enteredPassword = inputPasswordRef.current.value;
      let username;

      if (inputUsernameRef.current) {
        username = inputUsernameRef.current.value;
      }

      if (enteredEmail.length === 0 || enteredPassword.length === 0) {
        return;
      }

      let apiUrl, requestBody;

      if (username) {
        apiUrl = "http://localhost:3001/user/signup";
        requestBody = {
          username: username,
          email: enteredEmail,
          password: enteredPassword,
        };
      } else {
        apiUrl = "http://localhost:3001/user/login";
        requestBody = {
          email: enteredEmail,
          password: enteredPassword,
        };
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/JSON",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();

      if (username) {
        alert(data.message);
        setIsLogin(true);
      } else {
        console.log("Login Response:", data.token);
        dispatch(authActions.login(data.token));
        alert("User Logged in successfully");

        const fetchData = async () => {
          try {
            const response = await fetch(
              "http://localhost:3001/quiz/questions",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
              }
            );

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response:", data);
          } catch (error) {
            console.error("Error:", error.message);
          }
        };

        fetchData();

        history.replace("/profile");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    inputEmailRef.current.value = "";
    inputPasswordRef.current.value = "";
    if (inputUsernameRef.current) {
      inputUsernameRef.current.value = "";
    }
  };

  return (
    <div className={styles.userContainer}>
      <div>
        <form onSubmit={formHandler}>
          {isLogin ? null : (
            <div className={styles.formGroup}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                ref={inputUsernameRef}
              />
            </div>
          )}
          <div className={styles.formGroup}>
            <label>Email address</label>
            <input type="email" placeholder="Enter email" ref={inputEmailRef} />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              ref={inputPasswordRef}
            />
          </div>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className={styles.toggleText} onClick={loginHandler}>
          {isLogin ? "New User - Sign Up" : "Already User - Login"}
        </p>
      </div>
    </div>
  );
};

export default User;
