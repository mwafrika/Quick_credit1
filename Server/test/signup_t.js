/* eslint-disable linebreak-style */
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../config/index');

const should = chai.should();
chai.use(chaiHttp);
const loginDetails = {
  email: 'lemoisson@quick-credit.com',
  password: '12345678',
  fname: 'lemoissn',
  lname: 'metre',
  country: 'Republic of Rwanda ',
  address: 'Rubavu',
  city: 'Gisenyi',
};
const loginDetailsTrue = {
  email: 'lemoissonM@quick-credit.com',
  password: '12345678',
  fname: 'lemoissn',
  lname: 'metre',
  country: 'Republic of Rwanda ',
  address: 'Rubavu',
  city: 'Gisenyi',
};
describe('Signup', () => {
  it('it should not create an account with undefinned values', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send('') // this is like sending $http.post or this.http.post in Angular
      .end((err, res) => { // when we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        res.should.have.status(400);
        console.log(res.body.message);
        done();
      });
  });
  it('it should not create an account if the email is already taken', (done) => {
    chai.request(app.app)
      .post('/v1/auth/signup')
      .send(loginDetails) // this is like sending $http.post or this.http.post in Angular
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
      .post('/v1/auth/signup')
      .send(loginDetailsTrue) // this is like sending $http.post or this.http.post in Angular
      .end((err, res) => { // when we get a response from the endpoint
        // in other words,
        // the res object should have a status of 201
        res.should.have.status(200);
        chai.expect(JSON.parse(res.body.data).email).equal('lemoissonM@quick-credit.com');
        console.log(JSON.parse(res.body.data));
        done();
        //app.closeServer();
      });
  });
});
