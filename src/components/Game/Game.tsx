import { useState } from "react";
import Board from "@/components/Board/Board";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import { useStopwatch } from "@/hooks/useStopwatch";
import createBoard from "./helper";

import "./Game.scss";

const N_ROWS = 5;
const N_COLUMNS = 5;
const TRESHHOLD = 0.25;

function Game(): JSX.Element {
  const [moves, setMoves] = useState(0);
  const [board, setBoard] = useState(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));
  const [hasWon, setHasWon] = useState(false);

  const { timeString, updateTime } = useStopwatch();

  const resetGame = () => {
    updateTime(0);
    setMoves(0);
    setHasWon(false);
    setBoard(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));
  };

  const updateBoard = (newBoard: boolean[][]) => {
    setBoard(newBoard);
  };

  const updateMoves = () => {
    setMoves((moves) => moves + 1);
  };

  const checkWinCondition = (board: boolean[][]) => {
    const isEveryCellEmpty = board.every((row) => row.every((cell) => !cell));
    setHasWon(isEveryCellEmpty);
  };

  return (
    <section className="game">
      <div className="game__container container">
        <div className="game__header">
          <div className="game__line container">
            <p className="game__moves">Moves: {moves}</p>
            <Stopwatch time={timeString} />
            <button className="game__reset-btn" type="button" onClick={resetGame}>
              New Game
            </button>
          </div>
        </div>
        <h1 className="heading-primary neon-text">Lights Out</h1>
        <Board
          board={board}
          checkWinCondition={checkWinCondition}
          updateBoard={updateBoard}
          updateMoves={updateMoves}
        />
      </div>
    </section>
  );
}

export default Game;
