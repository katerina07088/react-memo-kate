//import { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoard.module.css";
//import { getListOfLeaders } from "../../api/apiLeaderBoard";
//import { useState } from "react";

export function LeaderBoard({ onClick }) {
  //const [error, setError] = useState("");

  //useEffect(() => {
  //getListOfLeaders()
  //.then(res => {
  //setTasks(res.tasks);
  //})
  //.catch(error => {
  //setError(error.message);
  //});
  //}, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titleLeaderBoard}>Лидерборд</h1>

        <Button onClick={onClick}>Начать сначала</Button>
      </div>
      <div className={styles.leadersList}>
        <ul className={styles.leaders}>
          <li className={styles.leader}>
            <div className={styles.leaderPTtl}>Позиция</div> <div className={styles.leaderPTtl}>Пользователь</div>{" "}
            <div className={styles.leaderPTtl}>Время</div>
          </li>
          <li className={styles.leader}>
            <div className={styles.leaderP}>Позиция</div> <div className={styles.leaderP}>Пользователь</div>{" "}
            <div className={styles.leaderP}>Время</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
