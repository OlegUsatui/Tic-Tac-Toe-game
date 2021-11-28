export function findWinner(board) {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winValue: board[a], indexWinRow: i };
    }
  }

  return [];
}

export const restartGame = (setBoard) => {
  setTimeout(() => setBoard(Array(9).fill("")), 1000);
};
