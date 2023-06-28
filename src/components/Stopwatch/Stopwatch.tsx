import "./Stopwatch.scss";

interface StopwatchProps {
  time: string;
}

function Stopwatch({ time }: StopwatchProps): JSX.Element {
  return <div className="stopwatch">{time}</div>;
}

export default Stopwatch;
