import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Project = ({ project }) => {
  return (
    <div className="card">
      <p className="date">{project.date}</p>
      <Link to={`/projectpage/${project.id}`}>
        <img src={project.img} alt={project.title} />
      </Link>

      <div className="text-ctn">
        <h3>{project.title}</h3>
        <Link to={`/projectpage/${project.id}`}>
          <div className="infos-site">
            <ul className="languages">
              {project.languages &&
                project.languages.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
            </ul>
            <p>{project.infos_short}</p>
            <div className="extern-links">
              <div className={"button-container"}>
                <Link to={`/projectpage/${project.id}`} className="hover">
                  <span className="button">En voir plus</span>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
