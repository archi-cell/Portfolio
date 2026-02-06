import PageWrapper from "../components/PageWrapper";
import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Freelancer",
        company: "ISBMR",
        period: "2025 – Present",
        points: [
            "Managing the website, make add ons in website",
            "Backup and recovery of website",
            "Handling backend of the website"
        ],
    },
    {
        role: "Web Developer",
        company: "Educational Institute",
        points: [
            "Created modern UI and professional website",
            "Focused on UX, accessibility & performance",
            "Published a real professional website",
        ],
    },
];

const Experience = () => {
    return (
        <PageWrapper>
            <section className={styles.experience}>
                <h2 className={styles.heading}>Experience</h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${styles.reveal}`}
                        >
                            <div className={styles.dot}></div>

                            <div className={styles.card}>
                                <h3>{exp.role}</h3>
                                <span>
                                    {exp.company} • {exp.period}
                                </span>

                                <ul>
                                    {exp.points.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default Experience;
