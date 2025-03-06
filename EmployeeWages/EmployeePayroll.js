class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
    }
}
module.exports = EmployeePayroll;
