const Helper = require('./index');
const TestHelper = require('./lib/testHelper');

describe('condor-context-test-helper', () => {
  it('must expose TestHelper class', () => {
    expect(Helper).toEqual(TestHelper);
  });
});
