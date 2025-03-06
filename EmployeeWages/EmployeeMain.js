// UC1 - Check if the employee is present or absent
const EMPLOYEE_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 2);
if (empCheck === EMPLOYEE_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC2 - Calculate daily employee wage
const WAGE_PER_HOUR = 10;
const FULL_TIME_HOURS = 5; 
const PART_TIME_HOURS = 1; 
let empType = Math.floor(Math.random() * 3);
let workHours; 

switch (empType) {
    case 1:
        workHours = PART_TIME_HOURS;
        console.log("Employee worked Part Time.");
        break;
    case 2:
        workHours = FULL_TIME_HOURS;
        console.log("Employee worked Full Time.");
        break;
    default:
        workHours = 0; 
        console.log("Employee did not work.");
        break;
}
let dailyWage = workHours * WAGE_PER_HOUR;
console.log(`Daily Wage: $${dailyWage}`);

// UC3 - Function to calculate working hours based on employee type
function getWorkingHours(empCheck) {
    // Constants for employee work types
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    // Determine and return working hours
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHrs = 0;
empCheck = Math.floor(Math.random() * 3);
empHrs = getWorkingHours(empCheck);
console.log(`Employee worked for ${empHrs} hours.`);
