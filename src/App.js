import "./styles.css";
import Content from "./Components/Content";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Award from "./Components/Award";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Award" element={<Award />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
