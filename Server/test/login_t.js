/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../config/index');

chai.use(chaiHttp);
const log = {
  email: 'josue@mwafrika',
  password: 'mwafrika123',
};
const log2 = {
  email: 'josue@mwafrika',
  password: 'mwafrika123',
};

describe('login', () => {
  it('it should return a 400 when there is a wrong request', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send('')
      .end((err, res) => {
        res.chai.should().have.status(400);
        console.log(res.body.message);
        done();
      });
  });

  it('login information matches', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(log2)
      .end((err, res) => {
        res.chai.should().have.status(200);
        chai.expect(JSON.parse(res.body.data).email).equal('mwafrikajosue@gmail.com');
        console.log(JSON.parse(res.body.data));
        done();
      });
  });
  it('should return 403 when password or mail is not correct', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(log)
      .end((err, res) => {
        res.chai.should().have.status(403);
        console.log(res.body.message);
        done();
      });
  });
});
module.exports.app = app.app;
