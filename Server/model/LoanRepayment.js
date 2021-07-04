/* eslint-disable linebreak-style
*/

// creating the loan repayment class

class LoanRepayment {
  constructor(id, loanId, amount, tenorCovered) {
    this.id = id;
    this.createdOn = new Date();
    this.loanId = loanId;
    this.amount = amount;
    this.tenorCovered = tenorCovered;
  }


  getTenorCovered() {
    return this.tenorCovered;
  }

  getLoanId() {
    return this.loanId;
  }

  getRepaymentID() {
    return this.id;
  }

  getAmount() {
    return this.amount;
  }

  getDate() {
    return this.createdOn;
  }
}

const loanRepaymentex1 = new LoanRepayment(0, 0, 210, 2);

const loanRepaymentData = [loanRepaymentex1];
loanRepaymentData.push(new LoanRepayment(1, 4, 5, 6));
loanRepaymentData.push(new LoanRepayment(2, 4, 5, 6));
loanRepaymentData.push(new LoanRepayment(3, 4, 5, 6));
module.exports = {

  LoanRepayment,
  loanRepaymentData,

};
