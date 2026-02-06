import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Archi.dev — Built with ❤️</p>
        </footer>
    );
};

export default Footer;
