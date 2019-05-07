/* eslint-disable linebreak-style */
import { loans } from '../models1/Loan1';

function editLoan(loan1) {
  loans[loans.id] = loans;
  return loans[loan1.id];
}
function getLoanCount() {
  return loans.length;
}
function searchLoanByUser(email, myloans) {
  return myloans.filter(loan => loan.userMail === email);
}
function getAllLoans(email) {
  if (email) return searchLoanByUser(email, loans);
  return loans;
}
function addLoan(newLoan) {
  loans.push(newLoan);
  return loans[newLoan.id];
}
function getSingleLoan(loanID) {
  return loans[loanID];
}
function getAllAproved(email) {
  if (email) return (email, searchLoanByUser(email, loans.filter(loan => loan.getStatus() === 'approved')));
  return loans.filter(loan => loan.getStatus() === 'approved');
}
function getCurrent(email) {
  return getAllAproved(email).filter(loan => loan.isRepaid() === false);
}
function getRepaid(email) {
  return getAllAproved(email).filter(loan => loan.isRepaid() === true);
}
function getPending(email) {
  if (email) return (email, searchLoanByUser(email, loans.filter(loan => loan.getStatus() === 'pending')));
  return loans.filter(loan => loan.getStatus() === 'pending');
}
function getRejected(email) {
  if (email) return (email, searchLoanByUser(email, loans.filter(loan => loan.getStatus() === 'rejected')));
  return loans.filter(loan => loan.getStatus() === 'rejected');
}

export default {
  editLoan,
  getLoanCount,
  searchLoanByUser,
  getAllLoans,
  addLoan,
  getSingleLoan,
  getAllAproved,
  getCurrent,
  getRepaid,
  getPending,
  getRejected,
};
