import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>

            <p className={styles.description}>
                {project.description}
            </p>

            <p className={styles.Links}>
                {project.Links}
            </p>

            <p className={styles.github}>
                {project.github}
            </p>

            <div className={styles.tech}>
                {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                ))}
            </div>

            {/* <div className={styles.actions}>
                <a href={project.demo} target="_blank">Live</a>
                <a href={project.github} target="_blank">Code</a>
            </div> */}
        </article>
    );
};

export default ProjectCard;
