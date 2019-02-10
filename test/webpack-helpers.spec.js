const webpackHelpers = require('../src/webpack-helpers');

describe('webpackHelpers', () => {
  describe('#getWebpackAliasFromPaths', () => {
    it('should return an object', () => {
      const res = webpackHelpers.getWebpackAliasFromPaths('', []);
      expect(Object.prototype.toString.call(res) === '[object Object]').toBeTruthy();
    });
  });
});
