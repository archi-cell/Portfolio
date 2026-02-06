/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                bg: "#05070f",
                card: "#0b1020",
                neonBlue: "#38bdf8",
                neonPurple: "#a78bfa",
                neonPink: "#f472b6",
                textMain: "#e5e7eb",
                textMuted: "#94a3b8",
            },
            boxShadow: {
                neon: "0 0 20px rgba(56,189,248,0.4)",
            },
        },
    },

    plugins: [],
};
