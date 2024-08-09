import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  //const title = isLeader ? "Вы попали в лидерборд!" : isWon ? "Вы выйграли!" : "Вы проиграли!";

  const title = isWon ? "Вы выйграли!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {/* {isLeader ? (
        <div className={styles.userblock}>
          {nameInputElementDirty && nameInputElementError && (
            <div style={{ color: "red", fontFamily: "StratosSkyeng" }}>{nameInputElementError}</div>
          )}
          <div className={styles.userblockSubmit}>
            <input
              id="name-input"
              type="text"
              name="name"
              onBlur={e => blurHandler(e)}
              required
              value={sanitizeHtml(nameInputElement.name)}
              onChange={handleNameInputChange}
              className={styles.input}
              placeholder="Пользователь"
            />
            <Link to="/leaderboard">
              <img
                onClick={sumbitPostLeader}
                className={styles.submitImg}
                src={submitImg}
                alt="Отправить имя пользователя"
              />
            </Link>
          </div>
        </div>
      ) : null} */}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link to="/leaderboard">
        <div className={styles.leaderBoardLink}>Перейти к лидерборду</div>
      </Link>
    </div>
  );
}
