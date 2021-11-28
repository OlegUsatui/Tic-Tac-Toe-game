import { useState } from "react";
import "../styles/Modal.css";

const Modal = ({ onSubmit }) => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ playerName1, playerName2 });
  };

  return (
    <div className="overlay">
      <div className="modal">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Welcome to the game of tic tac toe</h2>
          <p className="text">Enter the name of the player №1</p>
          <input
            value={playerName1}
            type="text"
            onChange={(e) => setPlayerName1(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Player Х"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          ></input>
          <p className="text">Enter the name of the player №2</p>
          <input
            value={playerName2}
            type="text"
            onChange={(e) => setPlayerName2(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Player О"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          ></input>
          <button type="submit" className="buttonSubmit">
            Start
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
