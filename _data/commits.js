const simpleGit = require("simple-git");

module.exports = async () => {
  const git = simpleGit();
  return await git.log();
};
