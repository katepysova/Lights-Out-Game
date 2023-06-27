import "./Cell.scss";

interface CellProps {
  isLightning: boolean;
  onCellClick: () => void;
}

function Cell({ onCellClick, isLightning }: CellProps): JSX.Element {
  // const className = isLightning ? "cell cell--is-lightning" : "cell";
  return (
    <td
      className={isLightning ? "cell cell--is-lightning" : "cell"}
      role="button"
      tabIndex={0}
      onClick={onCellClick}
      onKeyDown={() => null}
      aria-label="click"
    />
  );
}

export default Cell;
