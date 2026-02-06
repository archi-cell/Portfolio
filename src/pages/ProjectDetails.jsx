import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className={styles.card}>
                <h2 className="text-2xl text-neonBlue">Project Not Found</h2>
                <Link to="/projects" className="text-neonBlue underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <section className="container mx-auto space-y-16">

            {/* HERO */}
            <div>
                <h1 className="text-4xl font-bold text-neonBlue">
                    {project.title}
                </h1>
                <p className="mt-4 max-w-2xl text-textMuted">
                    {project.description}
                </p>

                <div className="mt-6 flex gap-4">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-neonBlue text-bg text-sm"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        className="px-5 py-2 rounded-full border border-neonBlue text-neonBlue text-sm"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* PROBLEM */}
            <div>
                <h3 className="text-xl font-semibold text-neonPurple mb-3">
                    Problem Statement
                </h3>
                <p className="text-textMuted max-w-3xl">
                    {project.problem}
                </p>
            </div>

            {/* SOLUTION */}
            <div>
                <h3 className="text-xl font-semibold text-neonPurple mb-3">
                    Solution
                </h3>
                <p className="text-textMuted max-w-3xl">
                    {project.solution}
                </p>
            </div>

            {/* FEATURES */}
            <div>
                <h3 className="text-xl font-semibold text-neonPurple mb-6">
                    Key Features
                </h3>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {project.features.map((feature) => (
                        <div
                            key={feature}
                            className="rounded-xl bg-card border border-white/10 p-4 hover:shadow-neon transition"
                        >
                            <p className="text-sm text-textMain">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TECH STACK */}
            <div>
                <h3 className="text-xl font-semibold text-neonPurple mb-4">
                    Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 rounded-full border border-white/10 text-sm text-textMuted"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ProjectDetails;
