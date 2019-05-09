/* eslint-disable max-len */
import { loanRepayment } from '../models1/Repayment1';
import { getRejected, editLoan } from './LoanH';
import { updateLoan } from '../controllers1/loanUser';
import { getUsers } from './userH';
import { myLoans } from '../models1/Loan1';

function updateLoanPayment(loanID, newAmount) {
  const newAmount1 = editLoan;
  myLoans[loanID].setBalance(myLoans[loanID].balance - newAmount);
  return updateLoan.updateLoan(newAmount1);
}
updateLoanPayment(0, loanRepayment.repay[0].getAmount());

function addNewLoanRepayment(newRepayment) {
  loanRepayment.repay.push(newRepayment);
  return updateLoanPayment(newRepayment.getLoanId, newRepayment.getAmount());
}
function getRepaymentCount() {
  return loanRepayment.repay.length;
}
// eslint-disable-next-line max-len
function getLoanRepayment(loanID) {
  return loanRepayment.repay.filter(repayment => repayment.getLoanId().toString() === loanID);
}
module.exports = {
  updateLoanPayment,
  addNewLoanRepayment,
  getRepaymentCount,
  getLoanRepayment,
};
