/* eslint-disable linebreak-style */
import loan from '../models1/users1';
import help from '../Helpers/LoanH';
import user from '../Helpers/userH';

const {
  addUserLoan, getLoanCount, getCurrentLoans, getRepaidLoans, getAllLoans,
} = help;
const { getSingleUser } = user;

export function getUserLoan(req, res) {
  if (req.query.status === 'approved' && req.query.repaid === 'false') {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(getCurrentLoans(req.params.email)),
    });
  } else if (req.query.status === 'approved' && req.query.repaid === 'true') {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(getRepaidLoans(req.params.email)),
    });
  } else {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(getAllLoans(req.params.email)),
    });
  }
}
export function updateLoan(req, res) {
  let errorMessage = '';
  let status = 400;
  if (!req.body.userMail) errorMessage = 'enter a usermail please';
  else if (!req.body.tenor || Number.isNaN(req.body.tenor)) errorMessage = 'please specify a valid tenor';
  else if (!req.body.amount || Number.isNaN(req.body.amount)) errorMessage = 'provide your amount please';
  else {
    const user1 = getSingleUser(req.body.userMail);
    const currentLoans = getCurrentLoans(req.body.userMail);
    if (!user1[0]) {
      errorMessage = 'the mail you are trying to use is not valid';
      status = 403;
    } else if (currentLoans[0]) {
      errorMessage = 'your loan is not fully paid';
      status = 400;
    } else {
      // eslint-disable-next-line max-len
      const newLoan = addUserLoan(new loan.Loan(getLoanCount(), req.body.userMail, Number.parseInt(req.body.tenor, 10), Number.parseInt(req.body.amount, 10)));

      res.status(200).send({
        status: 200,
        data: JSON.stringify(newLoan),
      });
    }
  }
  if (errorMessage) {
    res.status(status).send({
      status,
      error: errorMessage,
    });
  }
}

// module.exports = {
//   getUserLoan,
//   updateLoan,
// };
