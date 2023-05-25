import digital_template from "./assets/digital_template.mp4";
import puzzle_image from "./assets/puzzle_image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PuzzleImage = () => {
  const navigate = useNavigate();

  const level = localStorage.getItem("level");

  const [display, setDisplay] = useState(true);

  const getLevel = () => {
    let interval;
    if (level === "Easy") {
      interval = 3000;
    } else if (level === "Medium") {
      interval = 2000;
    } else {
      interval = 1000;
    }

    return interval;
  };

  setTimeout(() => {
    setDisplay(false);
    navigate("/quizz");
  }, getLevel());

  return (
    <div className="puzzle">
      <video src={digital_template} autoPlay loop />
      {display && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
            top: "0",
            margin: "100px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${puzzle_image})`,
              height: "600px",
              width: "915px",
              backgroundSize: "cover",
              marginLeft: "250px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PuzzleImage;
