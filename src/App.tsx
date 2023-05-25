import MainMenu from "./components/MainMenu";
import Quizz from "./components/Quizz";
import PuzzleImage from "./PuzzleImage";
import { Routes, Route } from "react-router-dom";
import digital_template from "./assets/digital_template.mp4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/puzzleImage" element={<PuzzleImage />} />
      <Route path="/quizz" element={<Quizz />} />
    </Routes>
  );
}

export default App;
