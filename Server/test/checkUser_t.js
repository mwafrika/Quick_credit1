/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);


describe('check user', () => {
  it('should add data when mail exist', (done) => {
    chai.request(app.app)
      .patch('/v1/users/mwafrikajosue@gmail.com/check')
      .send('')
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
        app.closeServer();
      });
  });
  it('it should not check user information unless the valid mail exist', (done) => {
    chai.request(app.app)
      .patch('/v1/users/josue@gmail.com/verify')
      .send('')
      .end((err, res) => {
        res.should.have.status(403);
        console.log(res.body.message);
        done();
      });
  });
});

module.exports.app = app.app;
