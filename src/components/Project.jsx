import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Project = ({ project }) => {
  return (
    <div className="card">
      <p className="date">{project.date}</p>
      <Link
        to={`/projectpage/${project.id}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <img src={project.img} alt={project.title} />
      </Link>

      <div className="text-ctn">
        <h3>{project.title}</h3>
        <Link
          to={`/projectpage/${project.id}`}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
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
                <span className="button">En voir plus</span>
                <i className="fa-solid fa-circle-arrow-right"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
