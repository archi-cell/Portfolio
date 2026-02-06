import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <h1 className={styles.logo}>Archi</h1>

                <ul className={styles.links}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/experience">Experience</NavLink></li>
                    <li><NavLink to="/achievements">Achievements</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
