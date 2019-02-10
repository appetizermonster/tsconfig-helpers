const path = require('path');
const requireJSON = require('require-json-ex');

const webpackHelpers = require('./webpack-helpers');
const jestHelpers = require('./jest-helpers');

function readPathsFromTsConfig(projectPath) {
  const tsConfig = requireJSON(path.join(projectPath, 'tsconfig.json'));
  const { paths } = tsConfig.compilerOptions;
  return paths || {};
}

function getWebpackAliasFromTsConfig(projectPath) {
  const paths = readPathsFromTsConfig(projectPath);
  return webpackHelpers.getWebpackAliasFromPaths(projectPath, paths);
}

function getJestModuleNameMapperFromTsConfig() {
  const paths = readPathsFromTsConfig(projectPath);
  return jestHelpers.getJestModuleNameMapperFromPaths(paths);
}

module.exports = {
  getWebpackAliasFromTsConfig,
  getJestModuleNameMapperFromTsConfig
};
