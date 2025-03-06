class EmployeePayroll {
    constructor(id, name, salary,gender,startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender;
        this.startDate = new Date(startDate);
    }
      // Name Validation using Regex
      setName(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        try {
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    }
}
module.exports = EmployeePayroll;
