import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />

          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
