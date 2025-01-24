/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "accent-green": "#d1585b",
                "accent-mint": "#FF8383",
                "accent-cyan": "#cae1de",
            },
            fontFamily: {
                openSans: ["var(--font-open-sans)", "serif"],
                montserrat: ["var(--font-montserrat)", "serif"],
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                scroll: "scroll 20s linear infinite", // Define the animation with a duration
            },
        },
    },
    plugins: [],
};
