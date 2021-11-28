import { useEffect, useState } from "react";
import "../styles/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { findWinner, restartGame } from "../utils/functions";
import Board from "./Board";
import Score from "./Score";
import Modal from "./Modal";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner1, setWinner1] = useState(0);
  const [winner2, setWinner2] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [indexWinRow, setIndexWinRow] = useState(null);

  useEffect(() => {
    const { playerName1, playerName2 } = playerName;
    const { winValue, indexWinRow } = findWinner(board);

    setIndexWinRow(indexWinRow);

    if (winValue && winValue === "X") {
      setWinner1((prev) => prev + 1);
      toast.success(`Победил ${playerName1}`);
      restartGame(setBoard);
      return;
    }
    if (winValue && winValue === "O") {
      setWinner2((prev) => prev + 1);
      toast.success(`Победил ${playerName2}`);
      restartGame(setBoard);
      return;
    }
    if (board.every((value) => value)) {
      toast.info(`Ничья`);
      restartGame(setBoard);
    }
  }, [board, playerName]);

  const onSubmit = (playersName) => {
    setPlayerName(playersName);
    setModalIsOpen(false);
  };

  const handleClick = (index) => {
    if (index < 0 || index > 9 || board[index]) return;

    const newBoard = [...board];
    newBoard.splice(index, 1, turn);
    setBoard(newBoard);
    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);
  };

  return (
    <div className="App">
      <Board
        indexWinRow={indexWinRow}
        board={board}
        handleClick={handleClick}
      />
      <Score playersName={playerName} win1={winner1} win2={winner2} />
      <ToastContainer position="top-right" autoClose={3000} />
      {modalIsOpen && <Modal onSubmit={onSubmit} />}
    </div>
  );
};

export default App;
