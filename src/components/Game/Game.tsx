import { useState } from "react";
import Board from "@/components/Board/Board";
import Stopwatch from "@/components/Stopwatch/Stopwatch";

import "./Game.scss";
import { useStopwatch } from "@/hooks/useStopwatch";
import createBoard from "./helper";

const N_ROWS = 5;
const N_COLUMNS = 5;
const TRESHHOLD = 0.25;

function Game(): JSX.Element {
  const [moves, setMoves] = useState(0);
  const [board, setBoard] = useState(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));

  const { timeString, updateTime } = useStopwatch();

  const newGame = () => {
    updateTime(0);
    setMoves(0);
    setBoard(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));
  };

  const updateBoard = (newBoard: boolean[][]) => {
    setBoard(newBoard);
  };

  const updateMoves = () => {
    setMoves((moves) => moves + 1);
  };

  return (
    <section className="game">
      <div className="game__container container">
        <div className="game__header">
          <div className="game__line container">
            <p className="game__moves">Moves: {moves}</p>
            <Stopwatch time={timeString} />
            <button className="game__reset-btn" type="button" onClick={newGame}>
              New Game
            </button>
          </div>
        </div>
        <h1 className="heading-primary neon-text">Lights Out</h1>
        <Board board={board} updateBoard={updateBoard} updateMoves={updateMoves} />
      </div>
    </section>
  );
}

export default Game;
