import Cell from "@/components/Cell/Cell";
import "./Board.scss";

interface BoardProps {
  board: boolean[][];
  updateBoard: (arg: boolean[][]) => void;
  updateMoves: () => void;
  checkWinCondition: (arg: boolean[][]) => void;
}

function Board({ board, updateBoard, updateMoves, checkWinCondition }: BoardProps): JSX.Element {
  const rows = board.length;
  const cols = board[0].length;

  const onCellClick = (coords: string): void => {
    const [i, j] = coords.split("-").map((el) => parseInt(el, 10));
    const newBoardStr: string = JSON.stringify(board);
    const newBoard: boolean[][] = JSON.parse(newBoardStr);

    const flipCell = (i: number, j: number) => {
      if (i >= 0 && i < rows && j >= 0 && j < cols) {
        newBoard[i][j] = !newBoard[i][j];
      }
    };

    flipCell(i, j);
    flipCell(i + 1, j);
    flipCell(i - 1, j);
    flipCell(i, j - 1);
    flipCell(i, j + 1);

    checkWinCondition(newBoard);
    updateBoard(newBoard);
    updateMoves();
  };

  const drawTable = () => {
    const table = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
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
