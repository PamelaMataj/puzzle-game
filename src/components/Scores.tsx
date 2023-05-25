import { useLocation } from "react-router-dom";

interface Props {
  score?: any;
  setScore?: any;
}

const Scores = (props: Props) => {
  const { state } = useLocation();

  return (
    <div className="scores">
      <h3> Scores </h3>
      <h3>{state?.score}</h3>
    </div>
  );
};

export default Scores;
