import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NewUser from "./pages/newuser";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import { useSelector } from "react-redux";
import { authActions } from "./store/auth";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Switch>
            {isLogin && <Redirect exact from="/newuser" to="/profile" />}
            <Route path="/newuser" component={NewUser} />
            {isLogin && <Route path="/profile" component={Profile} />}
            {isLogin && <Route path="/quiz" component={Quiz} />}
            {isLogin && <Route path="/leaderboard" component={Leaderboard} />}
            {!isLogin && <Redirect to="/newuser" />}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
