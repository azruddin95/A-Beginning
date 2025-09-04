/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",   // for App Router
        "./pages/**/*.{js,ts,jsx,tsx}",     // for Pages Router
        "./components/**/*.{js,ts,jsx,tsx}" // for components
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A89C6",
                secondary: "#253374",
                white: "#FFFFFF",
                black: "#191618",
                third: "#C93A7C",
                fourth: "#4AAB7D",
                "bg-primary": "#F5F7FA",
                "bg-secondary": "#EDEFF5",
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
