/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./public/**/*.html", "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
