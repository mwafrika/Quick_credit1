/* eslint-disable linebreak-style */
const { updateUser, getSingleUser } = require('../Helpers/userH');

function check(req, res) {
  if (req.params.userEmail) {
    const email = req.params.userEmail;
    if (email) {
      const user = getSingleUser(email)[0];
      if (user) {
        user.setStatus('verified');
        const newUser = updateUser(user);
        res.status(200).send({
          status: 200,
          data: JSON.stringify(newUser),
        });
      } else {
        res.status(403).send({
          status: 403,
          message: 'This email does not exist',
        });
      }
    } else {
      res.status(400).send({
        status: 400,
        message: 'bad request',
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      message: 'please! enter the valid information',
    });
  }
}
module.exports = check;
