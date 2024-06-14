module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {
      colors: {
        text: "#f0ebf2",
        background: "#110c14",
        primary: "#c7abd2",
        secondary: "#5e376d",
        accent: "#a870be",
      },
    },
  },
  variants: {},
  plugins: [],
};
