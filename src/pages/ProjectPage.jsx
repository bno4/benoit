import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import Navbar from "../components/Navbar";
import { motion, easeInOut } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();

  const site = projectsData.find((project) => project.id === id);

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
          <motion.img
            src={site.img}
            alt={site.title}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -30, opacity: 0.6 }}
            transition={{ ease: easeInOut, duration: 0.5 }}
          />
          <h2>{site.title}</h2>
        </div>
        <div className="project-ctn-txt">
          <div className="project-infos-site">
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

              <div className="button-container">
                <a
                  href={site.git}
                  target="_blank"
                  rel="noreferrer"
                  className="hover"
                >
                  <span className="button">Code source </span>
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="responsive">
              <img
                src={site.img_phone}
                alt="Photo version phone"
                className="phone"
              />
              <img
                src={site.img_mac}
                alt="Photo version desktop"
                className="mac"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
