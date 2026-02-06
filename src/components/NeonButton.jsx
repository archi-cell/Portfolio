import styles from "./NeonButton.module.css";

const NeonButton = ({ text, variant = "primary", onClick }) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
        >
            <span>{text}</span>
        </button>
    );
};

export default NeonButton;
