import { useState } from "react";
import Board from "@/components/Board/Board";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import Button from "@/components/Button/Button";
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

  const { timeString, pause, reset } = useStopwatch();

  const resetGame = () => {
    setMoves(0);
    setHasWon(false);
    setBoard(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));
    reset();
  };

  const updateBoard = (newBoard: boolean[][]) => {
    setBoard(newBoard);
  };

  const updateMoves = () => {
    setMoves((moves) => moves + 1);
  };

  const checkWinCondition = (board: boolean[][]) => {
    const isEveryCellEmpty = board.every((row) => row.every((cell) => !cell));
    if (isEveryCellEmpty) {
      setHasWon(true);
      pause();
    }
  };

  return (
    <section className="game">
      <div className="game__container container">
        <div className="game__header">
          <div className="game__line container">
            <p className="game__moves">Moves: {moves}</p>
            <Stopwatch time={timeString} />
            <Button type="button" handleClick={resetGame} variant="primary">
              New Game
            </Button>
          </div>
        </div>
        <h1 className="heading-primary neon-text-1">Lights Out</h1>
        {hasWon ? (
          <div className="game__win">
            <h2 className="heading-secondary neon-text-2">Congratulations! You have done it!</h2>
            <Button type="button" handleClick={resetGame} variant="secondary">
              Play Again
            </Button>
          </div>
        ) : (
          <Board
            board={board}
            checkWinCondition={checkWinCondition}
            updateBoard={updateBoard}
            updateMoves={updateMoves}
          />
        )}
      </div>
    </section>
  );
}

export default Game;
