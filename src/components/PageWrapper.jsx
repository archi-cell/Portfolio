import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const pageTransition = {
    duration: 0.5,
    ease: "easeOut",
};

const PageWrapper = ({ children }) => {
    return (
        <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="page-wrapper"
        >
            {children}
        </motion.main>
    );
};

export default PageWrapper;
