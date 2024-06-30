const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                questrial: ["Questrial", "sans-serif"],
            },
            colors: {
                night: "#141619",
            },
            screens: {
                xs: "375px",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({ addCommonColors: true })],
};
