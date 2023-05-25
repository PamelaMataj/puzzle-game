import React, { useState } from "react";

const Levels = () => {
  const [selectedLevel, setSelectedLevel] = useState("Easy");

  React.useEffect(() => {
    localStorage.setItem("level", selectedLevel);
  }, [selectedLevel]);

  return (
    <div className="level">
      <h3> Levels </h3>
      <div className="inputOption">
        <input
          type="radio"
          name="level"
          value="Easy"
          onChange={(e) => setSelectedLevel(e.target.value)}
        />
        Easy
      </div>
      <div className="inputOption">
        <input
          type="radio"
          name="level"
          value="Medium"
          onChange={(e) => setSelectedLevel(e.target.value)}
        />
        Medium
      </div>
      <div className="inputOption">
        <input
          type="radio"
          name="level"
          value="Hard"
          onChange={(e) => setSelectedLevel(e.target.value)}
        />
        Hard
      </div>
    </div>
  );
};

export default Levels;
