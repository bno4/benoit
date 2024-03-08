/* eslint-disable react/no-unescaped-entities */
import { motion, easeInOut } from "framer-motion";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const Projets = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-ctn">
        <h2>Portfolio</h2>
        <p className="projects-ctn__presentation">
          Vous trouverez ici une sélection de sites et applications web que j'ai
          développés, dont 6 missions professionnelles du parcours "Développeur
          web" d'OpenClassRooms. <br />
          Toutes ont un cahier des charges précis (rétroplanning, intégration de
          maquettes Figma, technos souhaitées, SEO, validateurs W3C, etc.), et
          ont été validées en soutenances par des professionnels du secteur.
          J'ai aussi ajouté 2 sites et 1 application React développés lors de la
          formation "Mastering front-end" de FromScratch.
        </p>
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
