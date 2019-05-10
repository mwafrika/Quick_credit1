/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);


describe('verify user', () => {
  it('it should not verify user if mail does not exist', (done) => {
    chai.request(app.app)
      .patch('/v1/users/leol@gmail.com/verify')
      .send('')
      .end((err, res) => { // we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        res.should.have.status(403);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 200 and new userdata when email exists', (done) => {
    chai.request(app.app)
      .patch('/v1/users/lemoisson@quick-credit.com/verify')
      .send('')
      .end((err, res) => { // get a response from the endpoint
        res.should.have.status(200);
        console.log(res.body);
        done();
        app.closeServer();
      });
  });
});

module.exports.app = app.app;
