/* eslint-disable linebreak-style */
import uuidv1 from 'uuid/v1';

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

const admin = new User(0, 'mwafrika', 'josue', 'mufungizi', '12345678', 'goma, kinshasa', 'DRC', 'verified', true);
const normalUser = new User(1, 'mwafrikajosue@gmail.com', 'josue', 'josue', '12345678', 'Gisozi, Kigali', 'DRC', 'unchecked', false);
const normalUser1 = new User(1, 'mwafrikajosue@gmail.com', 'junior', 'Linda', '12345678', 'Gisozi, Goma', 'Republic of Rwanda', 'unverified', false);

const users = [admin, normalUser, normalUser1];

export default {
  User,
  users,
};
