/* eslint-disable linebreak-style */
const { getSingleUser, getUsersCount, addUser } = require('../Helpers/userH');
const { User } = require('../models1/users1');
const replacerJson = require('../Helpers/indexH');

// Parse incoming requests data
function signup(req, res) {
  let errorMessage = '';
  if (!req.body.email) errorMessage = 'e-mail is required';
  else if (!req.body.fname)errorMessage = 'the first-name is required';
  else if (!req.body.lname)errorMessage = 'the last-name is required';
  else if (!req.body.address)errorMessage = 'the user name or email is not correct';
  if (errorMessage) {
    res.status(400).send({
      status: 400,
      message: errorMessage,
    });
  } else {
    const user = getSingleUser(req.body.email);
    if (!user[0]) {
      const newUser = new User(getUsersCount, req.body.email, req.body.fname,
        req.body.lname, req.body.password, req.body.address, req.body.country, 'unverified', false);
      addUser(newUser);
      res.status(200).send({
        status: 200,
        data: JSON.stringify(getSingleUser(newUser.email)[0], replacerJson),
      });
    } else {
      res.status(403).send({
        status: 403,
        message: 'This mail already exists',
      });
    }
  }
  return res;
}

module.exports = signup;
