//UC1-EmployeePresence
const EMPLOYEE_PRESENT = 1;

let empCheck = Math.floor(Math.random() * 2);
if (empCheck === EMPLOYEE_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
//UC-2 Calculate Daily Employee Wage
const WAGE_PER_HOUR = 10;
const FULL_TIME_HOURS = 5;
const PART_TIME_HOURS = 1;
// Generate random work type (0 - No Work, 1 - Part Time, 2 - Full Time)
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
// Calculate daily wage
let dailyWage = workHours * WAGE_PER_HOUR;
console.log(`Daily Wage: $${dailyWage}`);