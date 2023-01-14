class AppointmentError extends Error {}

class Appointment {
  constructor(doctor, patient, month, date, year, hour) {
    this.date = new Date(year, month, date, hour);
    const today = new Date();

    if (this.date < today) {
      throw new AppointmentError("Appointment must be in the future");
    }
    if (!patient.insurance || !doctor.acceptsInsurance(patient.insurance)) {
      throw new AppointmentError("Patient's insurance not supported");
    }
    if (hour < 8 || hour > 17) {
      throw new AppointmentError("Invalid time slot");
    }
    for (let i = 0; i < doctor.appointments.length; i++) {
      let existingAppointment = doctor.appointments[i];
      if (existingAppointment.date.getTime() === this.date.getTime()) {
        throw new AppointmentError("Invalid time slot");
      }
    }
    doctor.appointments.push(this);
  }
}

module.exports = [Appointment, AppointmentError];
