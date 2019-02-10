const path = require('path');

function getWebpackAliasFromPaths(basePath, paths) {
  return Object.keys(paths).reduce((res, pathName) => {
    const tsPath = paths[pathName][0];
    const wpPathName = pathName.replace(/\/\*$/, "");
    const wpPath = path.join(basePath, tsPath.replace(/\/\*$/, ""));
    res[wpPathName] = wpPath;
    return res;
  }, {});
}

module.exports = { getWebpackAliasFromPaths };
