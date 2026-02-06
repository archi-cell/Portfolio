import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
    return (
        <PageWrapper>
            <section className="contact-section">
                <motion.div
                    className="contact-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* LEFT */}
                    <div className="contact-info">
                        <h2>Let’s Connect</h2>
                        <p>
                            Open to internships, full-time roles, and exciting collaborations.
                            Feel free to reach out — I usually respond quickly.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:archi.email@example.com">
                                <Mail size={18} />
                                archidadwal@gmail.com
                            </a>

                            <a href="https://github.com/archi-cell" target="_blank">
                                <Github size={18} />
                                GitHub
                            </a>

                            <a href="https://www.linkedin.com/in/archi-dadhwal-886896292/" target="_blank">
                                <Linkedin size={18} />
                                LinkedIn
                            </a>

                            <a
                                href="https://drive.google.com/file/d/1txMaEiqWv5LgUVOd8un-0vVgQ1rSotlW/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-btn"
                            >
                                View Resume
                            </a>


                        </div>
                    </div>

                    {/* RIGHT */}
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea rows="5" placeholder="Your Message" />
                        <button type="submit">Send Message</button>
                    </form>
                </motion.div>
            </section>
        </PageWrapper>
    );
};

export default Contact;
