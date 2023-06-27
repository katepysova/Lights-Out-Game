import Board from "@/components/Board/Board";
import "./Game.scss";

function Game(): JSX.Element {
  return (
    <section className="game">
      <h1 className="heading-primary neon-text">Lights Out</h1>
      <Board />
    </section>
  );
}

export default Game;
