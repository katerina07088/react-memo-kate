import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext } from "react";
import { EasyContext } from "../../context/context";
import { useState } from "react";

export function SelectLevelPage() {
  const { isEasyMode, setEasyMode } = useContext(EasyContext);
  const [selectedGame, setSelectedGame] = useState();
  const nav = useNavigate();

  const startAGame = () => {
    if (selectedGame !== null) {
      nav(`/game/${selectedGame}`);
    } else {
      nav(`/`);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          {[3, 6, 9].map(game => (
            <li
              key={game}
              className={`${styles.level} ${selectedGame === game ? styles.selectedLevel : ""}`}
              onClick={() => setSelectedGame(game)}
            >
              {game / 3}
            </li>
          ))}
          {/* <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li> */}
        </ul>
        <div className={styles.lightMode}>
          <input
            id="lightMode"
            className={styles.inputMode}
            type="checkbox"
            checked={isEasyMode}
            onChange={e => setEasyMode(e.target.checked)}
          />
          <label className={styles.labelMode} htmlFor="lightMode">
            Лёгкий режим (3 жизни)
          </label>
        </div>
        <div>
          <button className={styles.button} onClick={startAGame}>
            Играть
          </button>
        </div>
        <Link to="/leaderboard">
          <div className={styles.leaderBoardLink}>Перейти к лидерборду</div>
        </Link>
      </div>
    </div>
  );
}
