module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
    "./src/**/*.css",
    "./src/app/**/*.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        text: "#f0ebf2",
        background: "#110c14",
        primary: "#c7abd2",
        secondary: "#5e376d",
        accent: "#a870be",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    require("postcss-purgecss")({
      content: [
        "./src/**/*.html",
        "./src/**/*.ts",
        "./src/**/*.css",
        "./src/app/**/*.ts",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("@tailwindcss/typography"),
  ],
};
