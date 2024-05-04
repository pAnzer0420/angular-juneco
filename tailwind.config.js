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
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#ede8ed",
        background: "#0F0E0F",
        primary: "#83688D",
        primaryshade: "9E81A8",
        secondary: "#503A45",
        accent: "#72555B",
        shade: "131113",
        shade2: "2F262F",
        error: "EC5858",
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
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./src/**/*.html",
        "./src/**/*.ts",
        "./src/**/*.css",
        "./src/app/**/*.ts",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
