import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar"; // Ensure the correct path and casing
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";
import "./styles.css";

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<AboutMe />} /> {/* Ensure the path is correct */}
        </Routes>
      </Router>
    );
}

export default App;