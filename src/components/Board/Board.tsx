import { useState } from "react";
import Cell from "@/components/Cell/Cell";
import "./Board.scss";

const N_ROWS = 5;
const N_COLUMNS = 5;
const TRESHHOLD = 0.25;

const createBoard = () => {
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

function Board(): JSX.Element {
  const [board, setBoard] = useState(createBoard());

  const onCellClick = (coords: string): void => {
    const [i, j] = coords.split("-").map((el) => parseInt(el, 10));
    const newBoardStr: string = JSON.stringify(board);
    const newBoard: boolean[][] = JSON.parse(newBoardStr);

    const flipCell = (i: number, j: number) => {
      if (i >= 0 && i < N_ROWS && j >= 0 && j < N_COLUMNS) {
        newBoard[i][j] = !newBoard[i][j];
      }
    };

    flipCell(i, j);
    flipCell(i + 1, j);
    flipCell(i - 1, j);
    flipCell(i, j - 1);
    flipCell(i, j + 1);

    setBoard(newBoard);
  };

  const drawTable = () => {
    const table = [];
    for (let i = 0; i < N_ROWS; i++) {
      const row = [];
      for (let j = 0; j < N_COLUMNS; j++) {
        const coords = `${i}-${j}`;
        row.push(
          <Cell key={coords} isLightning={board[i][j]} onCellClick={() => onCellClick(coords)} />
        );
      }
      table.push(<tr key={`${i}`}>{row}</tr>);
    }
    return (
      <table className="board">
        <tbody>{table}</tbody>
      </table>
    );
  };

  return <div>{drawTable()}</div>;
}

export default Board;
