const NeonBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-bg" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(56,189,248,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56,189,248,0.15) 1px, transparent 1px)
            `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Neon glow blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neonPurple/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neonBlue/20 rounded-full blur-3xl" />
        </div>
    );
};

export default NeonBackground;
