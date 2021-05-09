const autoprefixer = require("autoprefixer");
const colors = require("tailwindcss/colors");
const postcss = require("postcss");
const path = require("path");
const tailwind = require("tailwindcss");

exports.data = {
  permalink({ page }) {
    return `${page.filePathStem}.css`;
  },
};

exports.render = async (data) => {
  const compiler = postcss([
    tailwind({
      mode: "jit",
      purge: ["*.hbs", path.join("_includes", "**", "*.hbs")],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {
          colors: {
            gray: colors.blueGray,
            teal: colors.teal,
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }),
    autoprefixer(),
  ]);
  const result = await compiler.process(
    ["base", "components", "utilities"]
      .map((key) => `@tailwind ${key};`)
      .join("\n"),
    {
      from: path.join(
        process.cwd(),
        "node_modules",
        "tailwindcss",
        "tailwind.css"
      ),
      to: path.join(process.cwd(), "_site", data.permalink(data)),
    }
  );
  return result.css;
};
