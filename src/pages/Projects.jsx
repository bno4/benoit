import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const Projets = () => {
  console.log(projectsData);

  return (
    <div>
      <Navbar />
      <div className="projects-ctn">
        <h2>Projets web</h2>
        <ul className="cards-ctn">
          {projectsData === null ? (
            <h3>Oups ! Pas de résultats...</h3>
          ) : (
            projectsData.map((project) => {
              return <Project key={project.id} project={project} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Projets;
