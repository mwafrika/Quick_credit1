/* eslint-disable linebreak-style */
/* eslint-disable no-lone-blocks  */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
class repayment {
  constructor(id, createOn, loanId, amount) {
    this.id = id;
    this.createOn = createOn;
    this.loanId = loanId;
    this.amount = amount;

    getId();
    {
      return this.id;
    }

    setId(id);
    {
      this.id = id;
    }

    getCreateOn();
    {
      return this.createOn;
    }

    setCreateOn(createOn);
    {
      this.createOn = createOn;
    }

    getLoanId();
    {
      return this.loanId;
    }

    setLoanId(loanId);
    {
      this.loanId = loanId;
    }

    getAmount();
    {
      return this.amount;
    }

    setAmount(amount);
    {
      this.amount = amount;
    }
  }
}
