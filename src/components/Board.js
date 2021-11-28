import "../styles/Board.css";
import Square from "./Square";

const Board = ({ indexWinRow, board, handleClick }) => {
  return (
    <>
      <div className="board">
        {board.map((el, index) => {
          return (
            <Square
              key={index}
              value={el}
              index={index}
              onClick={handleClick}
            />
          );
        })}
        <div className={`line${indexWinRow}`}></div>
      </div>
    </>
  );
};

export default Board;
