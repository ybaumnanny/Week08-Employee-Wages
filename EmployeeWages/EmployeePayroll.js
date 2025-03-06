class EmployeePayroll {
    constructor(id, name, salary,gender,startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender;
        this.startDate = new Date(startDate);
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    }
}
module.exports = EmployeePayroll;
