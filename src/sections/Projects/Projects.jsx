import styles from "./ProjectsStyles.module.css";
import vibber from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={vibber}
          link="https://github.com/bnikhith/blob-store"
          h3="Vibber"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/bnikhith/blob-store"
          h3="Fresh Burger"
          p="Restaurant App"
        />
      </div>
    </section>
  );
}

export default Projects;
