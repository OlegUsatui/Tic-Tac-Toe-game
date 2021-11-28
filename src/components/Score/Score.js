import css from "./Score.module.css";

const Score = ({ playersName, win1, win2 }) => {
  const { playerName1, playerName2 } = playersName;
  return (
    <div className={css.container}>
      <h2 className={css.title}>Score</h2>
      <p className={css.score}>
        Player {playerName1} (X): {win1}
      </p>
      <p className={css.score}>
        Player 2 {playerName2} (O): {win2}
      </p>
    </div>
  );
};

export default Score;
