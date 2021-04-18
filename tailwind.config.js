const path = require("path");

module.exports = {
  mode: "jit",
  purge: ["*.hbs", path.join("_includes", "**", "*.hbs")],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
