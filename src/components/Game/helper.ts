const createBoard = (N_ROWS: number, N_COLUMNS: number, TRESHHOLD: number): boolean[][] => {
  const board: boolean[][] = [];
  for (let i = 0; i < N_ROWS; i++) {
    const row: boolean[] = [];
    for (let j = 0; j < N_COLUMNS; j++) {
      row.push(Math.random() < TRESHHOLD);
    }
    board.push(row);
  }
  return board;
};

export default createBoard;
