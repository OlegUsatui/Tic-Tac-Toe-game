import "../styles/Score.css";

const Score = ({ playersName, win1, win2 }) => {
  const { playerName1, playerName2 } = playersName;
  return (
    <div className="container">
      <h2 className="title">Score</h2>
      <p className="score">
        Player {playerName1} (X): {win1}
      </p>
      <p className="score">
        Player 2 {playerName2} (O): {win2}
      </p>
    </div>
  );
};

export default Score;
