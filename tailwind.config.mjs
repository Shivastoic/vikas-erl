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
                "accent-green": "#036a51",
            },
            fontFamily: {
                openSans: ["var(--font-open-sans)", "serif"],
                montserrat: ["var(--font-montserrat)", "serif"],
            }
        },
    },
    plugins: [],
};
