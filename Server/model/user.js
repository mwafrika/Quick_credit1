/* eslint-disable linebreak-style */
import uuidv1 from 'uuid/v1';

class User {
  constructor(id, fname, lname, email, password, address, country, status, isAdmin) {
    this.token = uuidv1();
    this.id = id;
    this.email = email;
    this.firstName = fname;
    this.lastName = lname;
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
    return `${this.fname}  ${this.lname}`;
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

const admin = new User(0, 'mwafrika', 'josue', 'jack@gmail.com', '123', 'goma, kinshasa', 'DRC', 'verified', true);
const normalUser = new User(1, 'mwafrika', 'josue', 'jordan@gmail.com', '12', 'goma, kinshasa', 'DRC', 'verified', false);
const normalUser1 = new User(2, 'mwafrika', 'josue', 'junior@gmail.com', '12', 'goma, kinshasa', 'DRC', 'verified', false);

const users = [admin, normalUser, normalUser1];

export default {
  User,
  users,
};
