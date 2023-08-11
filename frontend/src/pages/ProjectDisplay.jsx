import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  console.log(project.url);
  return (
    <div className="project">
      <h1>{project.name}</h1>

      <a target="_blank" rel="noopener noreferrer" href={project.url}>
        <img src={project.image} />
      </a>
      <p>
        <b>Skills: </b> {project.skills}
      </p>
      <a target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
        <GitHubIcon />
      </a>
    </div>
  );
}
export default ProjectDisplay;
