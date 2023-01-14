class User {
  constructor(name, month, day, year) {
    this.name = name;
    this.month = month;
    this.day = day;
    this.year = year;
    this.birthday = new Date(this.year, this.month - 1, this.day);
  }
  getBirthday() {
    return this.birthday.toDateString();
  }
  getAge() {
    const today = new Date();
    const birthDate = this.birthday;
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

module.exports = User;
