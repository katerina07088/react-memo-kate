import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext } from "react";
import { EasyContext } from "../../context/context";
import { useState } from "react";

export function SelectLevelPage() {
  const { isEasyMode, setEasyMode } = useContext(EasyContext);
  const [selectedLevel, setSelectedLevel] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          {[3, 6, 9].map(level => (
            <li
              key={level}
              className={`${styles.level} ${selectedLevel === level ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level / 3}
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
          <button className={styles.button}>Играть</button>
        </div>
        <Link to="/leaderboard">
          <div className={styles.leaderBoardLink}>Перейти к лидерборду</div>
        </Link>
      </div>
    </div>
  );
}
