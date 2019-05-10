/* eslint-disable linebreak-style */
const uuidv1 = require('uuid/v1');

class User {
  constructor(id, email, firstName, lastName, password, address, country, status, isAdmin) {
    this.token = uuidv1();
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.address = address;
    this.country = country;
    this.status = status;
    this.isAdmin = isAdmin;
  }

  validatePassword(password) {
    if (password === this.password) return true;
    return false;
  }

  setStatus(status) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  getUserID() {
    return this.id;
  }

  getUserName() {
    return `${this.firstName}  ${this.lastName}`;
  }

  getUserMail() {
    return this.email;
  }

  getUserAddress() {
    return this.address;
  }

  getUserCountry() {
    return this.country;
  }

  isAdmin() {
    return this.isAdmin;
  }
}

const admin = new User(0, 'admin@quick-credit.com', 'lemoisson', 'Metre', '12345678', 'Gisozi, Kigali', 'Republic of Rwanda', 'verified', true);
const normalUser = new User(1, 'lemoisson@quick-credit.com', 'lemoisson', 'Metre', '12345678', 'Gisozi, Kigali', 'Republic of Rwanda', 'unverified', false);
const normalUser1 = new User(1, 'murhulametre@quick-credit.com', 'lemoisson', 'Metre', '12345678', 'Gisozi, Kigali', 'Republic of Rwanda', 'unverified', false);

const users = [admin, normalUser, normalUser1];

module.exports = {
  User,
  users,
};
