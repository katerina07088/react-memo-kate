import { useEffect } from "react";
import styles from "./LeaderBoard.module.css";
import { getListOfLeaders } from "../../api/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import hardGame from "../../img/hardGame.png";
import noHardGame from "../../img/noHardGame.png";
import superPower from "../../img/superPower.png";
import noSuperPower from "../../img/noSuperPower.png";

export function LeaderBoard() {
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

  function playHardGame(leader) {
    if (leader.achievements.includes(1)) {
      return true;
    }
  }
  function superGame(leader) {
    if (leader.achievements.includes(2)) {
      return true;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titleLeaderBoard}>Лидерборд</h1>
        <Link to="/">
          <button className={styles.button}>Начать игру</button>
        </Link>
      </div>
      <div className={styles.leadersList}>
        <div className={styles.leaders}>
          <div className={styles.leaderTitle}>
            <div className={styles.leaderPTtl}>Позиция</div> <div className={styles.leaderPTtl}>Пользователь</div>
            <div className={styles.leaderPTtl}>Достижения</div>
            <div className={styles.leaderPTtl}>Время</div>
          </div>
          {leaders.map((leader, index) => (
            <div className={styles.leader} key={leader.id}>
              <div className={styles.leaderPosition}># {index + 1}</div>
              <div className={styles.leaderName}>{leader.name}</div>
              <div>
                {playHardGame(leader) ? (
                  <div className={styles.hardGameachives}>
                    <img src={hardGame} alt="achieves" />
                    <span className={styles.hardGameP}>Игра пройдена в сложном режиме</span>
                  </div>
                ) : (
                  <img src={noHardGame} alt="achieves" />
                )}
                {superGame(leader) ? (
                  <div className={styles.superPowerachives}>
                    <img src={superPower} alt="achieves" />
                    <span className={styles.superPowerP}>Игра пройдена без супер-сил</span>{" "}
                  </div>
                ) : (
                  <img src={noSuperPower} alt="achieves" />
                )}
              </div>
              {/* 
                <img src={superPower} alt="achieves" />
                <img src={hardGame} alt="achieves" />
              </div>
              <div className={styles.noAchives}>
                <img src={noSuperPower} alt="noachieves" />
                <img src={noHardGame} alt="noachieves" />
               */}
              {/* <div className={styles.achives}>
                {leader.achievements.includes(1) ? (
                  <div className={styles.hardGameachives}>
                    <img src={hardGame} alt="achieves" />
                    <span className={styles.hardGameP}>Игра пройдена в сложном режиме</span>{" "}
                  </div>
                ) : (
                  <img src={noHardGame} alt="achieves" />
                )}

                {leader.achievements.includes(2) ? (
                  <div className={styles.superPowerachives}>
                    <img src={superPower} alt="achieves" />
                    <span className={styles.superPowerP}>Игра пройдена без супер-сил</span>{" "}
                  </div>
                ) : (
                  <img src={noSuperPower} alt="achieves" />
                )}
              </div> */}

              <div className={styles.leaderTime}>
                {Math.floor(leader.time / 60)
                  .toString()
                  .padStart("2", "0")}
                :{leader.time - Math.floor(leader.time / 60) * (60).toString().padStart("2", "0")}
              </div>
            </div>
          ))}
        </div>
        {error && <p> {error}</p>}
      </div>
    </div>
  );
}
