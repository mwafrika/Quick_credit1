/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./Server/config/index.js');

const should = chai.should();
chai.use(chaiHttp);

const login_details = {
  email: 'mwafrika@gmail.com',
  password: 'josue',
};
const userInfo = {
  email: 'mwafrika@gmail.com',
  password: 'josue',
};
describe('login', () => {
  it('it should not login with undefined values', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 403 status when wrong mail or password is provided', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(login_details)
      .end((err, res) => {
        res.should.have.status(403);
        console.log(res.body.message);

        done();
      });
  });

  it('should return a 200 status and user data when everything is okey', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(userInfo)
      .end((err, res) => {
        res.should.have.status(200);
        chai.expect(JSON.parse(res.body.data).email).equal('mmmmjmj@gmail.com');
        console.log(JSON.parse(res.body.data));
        done();
      });
  });
});
module.exports.app = app.app;
