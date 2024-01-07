import React, { useEffect, useState } from "react";
import styles from "./Leaderboard.module.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:3001/user/leaderboard", {
          headers: {
            "Content-type": "application/json",
          },
        });

        if (!response.ok) {
          const err = await response.json();
          console.log(err);
          alert(err.error.message);
          throw new Error(err.message);
        }

        const data = await response.json();
        setLeaderboard(data.leaderboard.map((item) => item));
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className={styles.leaderboardContainer}>
      <h1 className={styles.leaderboardTitle}>Leaderboard</h1>
      <ul className={styles.leaderboardList}>
        {leaderboard.map((item) => (
          <li key={item.id} className={styles.leaderboardItem}>
            {item.username} - {item.totalScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
