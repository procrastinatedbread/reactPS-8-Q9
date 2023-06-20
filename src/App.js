import "./styles.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import Answers from "./components/Answers";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answers/:ansId" element={<Answers />} />
      </Routes>
    </div>
  );
}
