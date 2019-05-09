/* eslint-disable linebreak-style */
import loanH from '../Helpers/userH';
import dep from '../Helpers/indexH';

export default function login(req, res) {
  if (!req.body.email) {
    res.status(400).send({
      success: 'false',
      message: 'insert your e-mail',
    });
  } else if (!req.body.password) {
    res.status(400).send({
      success: 'false',
      message: 'insert your password',
    });
  } else {
    const user = loanH.getSingleUser(req.body.email);
    if (user[0]) {
      if (user[0].validatePassword(req.body.password)) {
        res.status(200).send({
          status: 200,
          data: JSON.stringify(user[0], dep),
        });
      } else {
        res.status(403).send({
          status: 400,
          message: 'invalid password',
        });
      }
    } else {
      res.status(403).send({
        status: 400,
        message: 'invalid e-mail',
      });
    }
  }
  return res;
}
// module.exports = login;
