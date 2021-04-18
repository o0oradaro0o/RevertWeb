const feather = require("feather-icons");

module.exports = (config) => {
  config.addPassthroughCopy("Build");
  config.addPassthroughCopy("TemplateData");
  config.addPassthroughCopy("tailwind.css");
  config.addShortcode("icon", (icon) => feather.icons[icon].toSvg());
  config.setUseGitIgnore(false);
};
