import { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoard.module.css";
import { getListOfLeaders } from "../../api/api";
import { useState } from "react";

export function LeaderBoard({ onClick }) {
  const [error, setError] = useState("");
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getListOfLeaders()
      .then(res => {
        setLeaders(res.leaders.sort((a, b) => (a.time > b.time ? 1 : -1)).slice(0, 10));
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titleLeaderBoard}>Лидерборд</h1>

        <Button onClick={onClick}>Начать сначала</Button>
      </div>
      <div className={styles.leadersList}>
        <ul className={styles.leaders}>
          <li className={styles.leader}>
            <div className={styles.leaderPTtl}>Позиция</div> <div className={styles.leaderPTtl}>Пользователь</div>
            <div className={styles.leaderPTtl}>Время</div>
          </li>
          {leaders.map(leader => (
            <li className={styles.leader} key={leader.id}>
              <div className={styles.leaderP}>{leader.id}</div>
              <div className={styles.leaderP}>{leader.name}</div>
              <div className={styles.leaderP}>{leader.time}</div>
            </li>
          ))}
        </ul>
        {error && <p> {error}</p>}
      </div>
    </div>
  );
}
