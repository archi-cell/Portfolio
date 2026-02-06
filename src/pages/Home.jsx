import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "./Home.css";

const Home = () => {
    return (
        <PageWrapper>
            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="hero-badge">
                        🚀 Full Stack Developer
                    </span>

                    <h1 className="hero-title">
                        Hi, I’m <span>Archi</span>
                    </h1>

                    <p className="hero-subtitle">
                        I build scalable, high-performance web applications with
                        modern UI, clean architecture, and real-world impact.
                    </p>

                    <div className="hero-actions">
                        <a href="/projects" className="btn primary">
                            View Projects
                        </a>
                        <a href="/contact" className="btn secondary">
                            Contact Me
                        </a>
                    </div>

                    <ul className="hero-points">
                        <li>⚡ React & Modern UI</li>
                        <li>🧠 Real-world projects</li>
                        <li>🚀 Performance & UX focused</li>
                    </ul>
                </motion.div>
            </section>
        </PageWrapper>
    );
};

export default Home;
