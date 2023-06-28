import { useState } from "react";
import Board from "@/components/Board/Board";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import createBoard from "./helper";
import "./Game.scss";

const N_ROWS = 5;
const N_COLUMNS = 5;
const TRESHHOLD = 0.25;

function Game(): JSX.Element {
  const [isActive, setIsActive] = useState(true);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [board, setBoard] = useState(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));

  const newGame = () => {
    setTime(0);
    setMoves(0);
    setBoard(createBoard(N_ROWS, N_COLUMNS, TRESHHOLD));
  };

  const updateTime = () => {
    setTime((time) => time + 1000);
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
        <div className="game__header header">
          <div className="header__container container">
            <span className="moves">Moves: {moves}</span>
            <Stopwatch time={time} updateTime={updateTime} isActive />
            <button className="game__reset btn" type="button" onClick={newGame}>
              New game
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
