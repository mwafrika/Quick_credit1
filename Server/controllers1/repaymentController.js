/* eslint-disable linebreak-style */
import {
  getAllLoans, getSingleLoan, addLoan, getRepaid,
} from '../Helpers/LoanH';
import { loanRepayment } from '../models1/Loan1';
import {
  updateLoanPayment, addNewLoanRepayment, getRepaymentCount, getLoanRepayment,
} from '../Helpers/RepaymentH';

function addPayent(req, res) {
  const loan = getSingleLoan(req.params.loanID);
  if (loan) {
    if (!loan.isRepaid()) {
      if (req.body.amount && !isNaN(req.body.amount)) {
        const tenor = Number.parseFloat(req.body.amount) / loan.getPaymentInstallment();
        const newRepayment = new getLoanRepayment(getLoanRepayment, getLoanRepayment.loanID, req.body.amount, tenor);
        res.status(200).send({
          status: 200,
          data: JSON.stringify(getRepayments.addNewLoanRepaymen(newRepayment)),
        });
      } else {
        res.status(400).send({
          status: 400,
          message: 'Please provide valid parameters',
        });
      }
    } else {
      res.status(401).send({
        status: 401,
        message: 'This loan is completly repaid',
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      message: 'There is no loan with such an ID',
    });
  }
}
function getRepayments(req, res) {
  const loans = loanRepaymentHelper.getLoanRepayment(req.params.loanID);
  if (loans) {
    res.status(200).send({
      status: 200,
      data: JSON.stringify(loans),
    });
  } else {
    res.status(400).send({
      status: 400,
      message: 'Please provide a correct loan ID',
    });
  }
}
module.exports = {
  addPayment,
  getRepayments,
};
