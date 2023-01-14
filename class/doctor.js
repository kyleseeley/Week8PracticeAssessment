const User = require("../class/user.js");
const { indexOf } = require("./appointment");

class Doctor extends User {
  constructor(name, month, day, year, appointments = []) {
    super(name, month, day, year);
    this.appointments = appointments;
    this.acceptsInsurance = acceptsInsurance;
  }
  acceptsInsurance(obj) {
    if(this.acceptsInsurance.indexOf(insurance) = -1)
  }
  addInsurance(insurance) {
    this.acceptsInsurance.push(insurance);
  }
  removeInsurance(insurance) {
    if (this.acceptsInsurance.indexOf(insurance) > -1) {
      let idx = this.acceptsInsurance.indexOf(insurance);
      this.acceptsInsurance.splice(idx, 1);
    }
  }
}

module.exports = Doctor;
