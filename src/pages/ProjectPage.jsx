import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import Navbar from "../components/Navbar";

const ProjectPage = () => {
  const { id } = useParams();
  console.log(id);
  const site = projectsData.find((project) => project.id === id);
  console.log(site);

  if (site === undefined) {
    return (
      <div>
        <h2>Oups... ! il ny a rien ici</h2>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="project-ctn">
        <div className="project-ctn-header">
          <img src={site.img} alt="" />
          <h2>{site.title}</h2>
        </div>
        <div className="project-ctn-txt">
          <div className="infos-site">
            <ul className="languages">
              {site.languages &&
                site.languages.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
            </ul>
            <p>{site.infos}</p>
            <div className="extern-links">
              <div
                className={site.link.length > 1 ? "button-container" : "off"}
              >
                <a
                  href={site.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover"
                >
                  <span className={site.link.length > 1 ? "button" : "off"}>
                    Voir le site
                  </span>
                </a>
              </div>
              <div className="button">
                <a
                  href={site.git}
                  target="_blank"
                  rel="noreferrer"
                  className="hover"
                >
                  <span className="button-container">
                    <span>Code source </span>
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
