import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import PageWrapper from "../components/PageWrapper";
import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <PageWrapper>
            <section className={styles.projects}>
                <h2 className={styles.heading}>Projects</h2>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default Projects;
