const path = require('path');

function getJestModuleNameMapperFromPaths(paths) {
  return Object.keys(paths).reduce((res, pathName) => {
    const tsPath = paths[pathName][0];
    const jestPathName = pathName.replace(/\/\*$/, "/(.*)");
    const jestPath = path.join("<rootDir>", tsPath.replace(/\/\*$/, "/$1"));
    res[jestPathName] = jestPath;
    return res;
  }, {});
}

module.exports = { getJestModuleNameMapperFromPaths };
