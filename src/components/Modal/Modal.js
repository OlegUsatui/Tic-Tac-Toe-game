import { useState } from "react";
import css from "./Modal.module.css";

const Modal = ({ onSubmit }) => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ playerName1, playerName2 });
  };

  return (
    <div className={css.overlay} name="overlay">
      <div className={css.modal}>
        <form className={css.form} onSubmit={handleSubmit}>
          <h2 className={css.title}>Welcome to the game of tic tac toe</h2>
          <p className={css.text}>Enter the name of the player №1</p>
          <input
            className={css.input}
            value={playerName1}
            type="text"
            onChange={(e) => setPlayerName1(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Player Х"
          ></input>
          <p className={css.text}>Enter the name of the player №2</p>
          <input
            className={css.input}
            value={playerName2}
            type="text"
            onChange={(e) => setPlayerName2(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Player О"
          ></input>
          <button type="submit" className={css.buttonSubmit}>
            Start
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
