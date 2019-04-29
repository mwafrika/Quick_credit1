var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
it('should return true if valid user id', function(){
      var isValid = loginController.isValidUserId('abc123')
      //assert.equal(isValid, true);
      expect(isValid).to.be.true;
});
it('should return false if invalid user id', function(){
      var isValid = loginController.isValidUserId('abc1234')
      //assert.equal(isValid, false);
      isValid.should.equal(false);
});