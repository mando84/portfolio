import "../styles/Home.css";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Armando Salinas</h2>
        <div className="prompt">
          <p>A developer with a passion for creating</p>
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
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, Mongoose</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;
