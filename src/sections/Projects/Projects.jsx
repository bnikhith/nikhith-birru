import styles from "./ProjectsStyles.module.css";
import CV from "../../assets/CV.png";
import ProjectCard from "../../common/ProjectCard";
import UNT from "../../assets/UNT.png";
import Finance from "../../assets/Finance.png";
import blob from "../../assets/blob.png";
import asm from "../../assets/asm.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Finance}
          link="https://nikhith-financial-dashboard.onrender.com/"
          h3="Financial portfolio"
          p="Single Window to add and manage finances."
          desc="Single Window to add and manage finances."
        />
        <ProjectCard
          src={CV}
          link="https://documentation.commvault.com/2024e/expert/live_browse_and_block_level_browse.html"
          h3="Live Browse"
          p="Live Browse and Recovery module for guest files and folders in VMs."
          desc="Live Browse and Recovery module for guest files and folders in VMs."
        />
        <ProjectCard
          src={CV}
          link="https://documentation.commvault.com/2024e/essential/file_indexing_overview.html"
          h3="File Indexing"
          p="The process of creating a index, which contains all of the metadata."
          desc="The process of creating a index, which contains all of the metadata."
        />
        <ProjectCard
          src={CV}
          link="https://documentation.commvault.com/2024e/essential/checking_readiness.html"
          h3="Check Readiness"
          p="Module to assess component readiness within the CommCell environment."
          desc="Module to assess component readiness within the CommCell environment."
        />
        <ProjectCard
          src={CV}
          link="https://documentation.commvault.com/2024e/essential/generating_enterprise_success_program_esp_presentation_from_commcell_dashboard.html"
          h3="Document Generator"
          p="Automate document generation by calculating data dynamically."
          desc="Framework to automate document generation by calculating data dynamically."
        />
        <ProjectCard
          src={CV}
          link="https://documentation.commvault.com/2024e/expert/newsletter_for_new_features_in_commvault_platform_release_2024_01.html"
          h3="Newsletter"
          p="Python script to automate Newsletter for new features every release."
          desc="Python script to automate Newsletter for new features every release."
        />
        <ProjectCard
          src={CV}
          link="https://documentation.commvault.com/2024e/essential/available_reports.html"
          h3="Reporting modules"
          p="Created different types of reporting modules."
          desc="Created different types of reporting modules."
        />
        <ProjectCard
          src={UNT}
          link="https://github.com/bnikhith/Automated-Evaluation-of-Speech-Responses-using-Deep-Learning/blob/main/Project_Report.pdf"
          h3="Capstone project"
          p="TOEFL english speaking test grading system. BD-LSTM scoring model."
          desc="TOEFL english speaking test grading system. BD-LSTM scoring model."
        />
        <ProjectCard
          src={blob}
          link="https://github.com/bnikhith/blob-store"
          h3="Blob Store"
          p="An Advanced File Management System implemented in C."
          desc="An Advanced File Management System implemented in C."
        />
        <ProjectCard
          src={asm}
          link="https://github.com/bnikhith/Interpreter"
          h3="8086 Interpreter"
          p="A compiler for custom assembly-like language."
          desc="A compiler for custom assembly-like language."
        />
      </div>
    </section>
  );
}

export default Projects;
