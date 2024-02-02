/* eslint-disable react/prop-types */
const Project = ({ project }) => {
  return (
    <div className="card">
      <img src={project.img} alt={project.title} />
      <div className="text-container">
        <h4>{project.title}</h4>
        <div className="infos-site">
          <p>{project.date}</p>
          <ul className="languages">
            {project.languages &&
              project.languages.map((item) => {
                return <li key={item}>{item}</li>;
              })}
          </ul>
          <p>{project.infos}</p>
          <div className="extern-links">
            {" "}
            <div
              className={project.link.length > 1 ? "button-container" : "off"}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="hover"
              >
                <span className={project.link.length > 1 ? "button" : "off"}>
                  Voir le site
                </span>
              </a>
            </div>
            <div className="button-git">
              <a
                href={project.git}
                target="_blank"
                rel="noreferrer"
                className="hover"
              >
                <span className="button">
                  <i className="fa-brands fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;