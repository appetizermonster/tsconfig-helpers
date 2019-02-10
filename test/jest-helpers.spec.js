const jestHelpers = require('../src/jest-helpers');

describe('jestHelpers', () => {
  describe('#getJestModuleNameMapperFromPaths', () => {
    it('should return an object', () => {
      const res = jestHelpers.getJestModuleNameMapperFromPaths([]);
      expect(Object.prototype.toString.call(res) === '[object Object]').toBeTruthy();
    });
  });
});
