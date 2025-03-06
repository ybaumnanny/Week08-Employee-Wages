class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        try {
            this.setId(id);
        } catch (error) {
            console.error(error.message);
            this.id = 0; // Default value
        }

        try {
            this.setName(name);
        } catch (error) {
            console.error(error.message);
            this.name = "Unknown"; // Default value
        }

        try {
            this.setSalary(salary);
        } catch (error) {
            console.error(error.message);
            this.salary = 0; // Default value
        }

        try {
            this.setGender(gender);
        } catch (error) {
            console.error(error.message);
            this.gender = "N/A"; // Default value
        }

        try {
            this.setStartDate(startDate);
        } catch (error) {
            console.error(error.message);
            this.startDate = new Date(); // Default to today's date
        }
    }

    setId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("Invalid ID! Employee ID must be a positive integer.");
        }
        this.id = id;
    }

    setName(name) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    setSalary(salary) {
        if (isNaN(salary) || salary <= 0) {
            throw new Error("Invalid Salary! Salary must be a positive number.");
        }
        this.salary = salary;
    }

    setGender(gender) {
        let genderRegex = /^[MF]$/;
        if (!genderRegex.test(gender)) {
            throw new Error("Invalid Gender! Gender must be either 'M' or 'F'.");
        }
        this.gender = gender;
    }

    setStartDate(startDate) {
        let dateObj = new Date(startDate);
        let today = new Date();
        if (isNaN(dateObj.getTime()) || dateObj > today) {
            throw new Error("Invalid Start Date! Start Date cannot be a future date.");
        }
        this.startDate = dateObj;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    }
}

module.exports = EmployeePayroll;
