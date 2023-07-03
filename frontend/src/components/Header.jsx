import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Header() {
  const [expandNavBar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </div>
  );
}
export default Header;
