import { Link } from "react-router-dom";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link
          to={{ pathname: "//www.linkedin.com/in/armando-salinas-b9b65a215" }}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <a href="mailto:armandosalinas84@gmail.com">
          <EmailIcon />
        </a>
        <Link to={{ pathname: "//www.github.com/mando84" }} target="_blank">
          <GithubIcon />
        </Link>
      </div>
      <p>2023; By Armando Salinas</p>
    </div>
  );
}
export default Footer;
