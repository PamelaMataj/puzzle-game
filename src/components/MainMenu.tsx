import Footer from "./Footer";
import Levels from "./Levels";
import Scores from "./Scores";
import digital_template from "../assets/digital_template.mp4";

const MainMenu = () => {
  const gameTitle = "Quiz Game";

  return (
    <div className="main">
      <video src={digital_template} autoPlay loop />
      <div className="wrapper">
        <div className="header">
          <h3> {gameTitle} </h3>
        </div>
        <div className="mainBody">
          <Levels />
          <Scores />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainMenu;
