import { useEffect, useRef, useState } from "react";
import "../index.css";

const stats = [
    { label: "Projects Completed", value: 3 },
    { label: "Hackathons Winner", value: 1 },
    
    
];

const AchievementCard = ({ label, value, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let start = 0;
        const duration = 1500;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [trigger, value]);

    return (
        <div className="achievement-card">
            <h3>{count}+</h3>
            <p>{label}</p>
        </div>
    );
};

const Achievements = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="achievements-section">
            <h2 className="section-title">Achievements</h2>

            <div className="achievements-grid">
                {stats.map((item, i) => (
                    <AchievementCard key={i} {...item} trigger={visible} />
                ))}
            </div>
        </section>
    );
};

export default Achievements;
