const feather = require("feather-icons");

module.exports = (config) => {
  config.addPassthroughCopy("Build");
  config.addPassthroughCopy("TemplateData");
  config.addShortcode("date", (date) => new Date(date).toLocaleDateString());
  config.addShortcode("icon", (name, size) => {
    const icon = feather.icons[name];
    if (!icon) {
      throw new Error(`Could not find icon ${name}.`);
    }
    const options = size ? { width: size, height: size } : undefined;
    return icon.toSvg(options);
  });
};
