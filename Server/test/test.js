/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
