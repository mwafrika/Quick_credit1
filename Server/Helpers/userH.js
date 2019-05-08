/* eslint-disable linebreak-style */
import User from '../models1/users1';

function getUsers() {
  return User.users;
}

const getUsersCount = User.users.length;

const addUser = (user) => {
  User.users.push(user);
};
function getSingleUser(email) {
  return User.users.filter(user => user.email === email);
}
function updateUser(user) {
  User.users[user.getUserID()] = user;
  return User.users[user.getUserID()];
}
module.exports = {
  getUsers,
  getUsersCount,
  addUser,
  getSingleUser,
  updateUser,
};
