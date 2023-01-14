const User = require("../class/user.js");

class Patient extends User {
  constructor(...args) {
    super(...args);
    this.insurance = null;
  }
  setInsurance(insurance) {
    this.insurance = insurance;
  }
  getInsurance() {
    return this.insurance;
  }
}

module.exports = Patient;
