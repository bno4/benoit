import { motion, easeInOut } from "framer-motion";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const Projets = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-ctn">
        <h2>Projets web</h2>
        <motion.ul
          className="cards-ctn"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0.5 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          {projectsData === null ? (
            <h3>Oups ! Pas de résultats...</h3>
          ) : (
            projectsData.map((project) => {
              return <Project key={project.id} project={project} />;
            })
          )}
        </motion.ul>
      </div>
    </div>
  );
};

export default Projets;
