import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
