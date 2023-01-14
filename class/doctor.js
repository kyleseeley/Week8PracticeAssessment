const User = require("../class/user.js");
const { indexOf } = require("./appointment");

class Doctor extends User {
  constructor(...args) {
    super(...args);
    this.appointments = [];
    this.acceptedInsurance = [];
  }
  addInsurance(insurance) {
    this.acceptedInsurance.push(insurance);
  }

  acceptsInsurance(insurance) {
    if (this.acceptedInsurance.indexOf(insurance) === -1) {
      return false;
    }
    return true;
  }

  removeInsurance(insurance) {
    let index;
    if (this.acceptedInsurance.includes(insurance)) {
      index = this.acceptedInsurance.indexOf(insurance);
      return this.acceptedInsurance.splice(index, 1);
    }
  }
  //   addAppointment(appointment) {
  //     for (let i = 0; i < this.appointments.length; i++) {
  //       let curr = this.appointments[i];
  //       if (appointment.date.toString() === curr.date.toString()) {
  //         return false;
  //       }
  //     }
  //       this.appointments.push(appointment);
  //       return true;
  //   }
}

module.exports = Doctor;
