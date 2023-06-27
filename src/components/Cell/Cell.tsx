interface CellProps {
  isLightning: boolean;
  onCellClick: () => void;
}

function Cell({ onCellClick, isLightning }: CellProps) {
  const className = isLightning ? "cell cell--is-ligtning" : "cell";
  return (
    <td
      className={className}
      role="button"
      tabIndex={0}
      onClick={onCellClick}
      onKeyDown={() => null}
      aria-label="click"
    >
      {isLightning ? "X" : "O"}
    </td>
  );
}

export default Cell;
