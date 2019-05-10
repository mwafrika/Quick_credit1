/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);
const login_details = {
  email: 'lemoisson@gmail.com',
  password: 'metre',
};
const loginDetailsTrue = {
  email: 'lemoisson@quick-credit.com',
  password: '12345678',
};

describe('login', () => {
  it('it should not login with undefinned values', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send('') // this is like sending $http.post or this.http.post in Angular
      .end((err, res) => { // when we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        res.should.have.status(400);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 403 status when wrong mail or password provided', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(login_details) // this is like sending $http.post or this.http.post in Angular
      .end((err, res) => { // when we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        res.should.have.status(403);
        console.log(res.body.message);
        done();
      });
  });
  it('should return a 200 status and user data when everything is okey', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signin')
      .send(loginDetailsTrue) // this is like sending $http.post or this.http.post in Angular
      .end((err, res) => { // when we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        res.should.have.status(200);
        chai.expect(JSON.parse(res.body.data).email).equal('lemoisson@quick-credit.com');
        console.log(JSON.parse(res.body.data));
        done();
        // app.closeServer();
      });
  });
});

module.exports.app = app.app;
