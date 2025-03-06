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

//UC4- Calculate monthly wage for employee

const NUM_OF_WORKING_DAYS = 2;
let empWage = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 3);
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log(`Total hours worked: ${empHrs}`);
console.log(`Monthly wage: $${empWage}`);

//UC-5 Calculate monthly wage for employee with max working hours OR max working days
const MAX_WORKING_HOURS = 100;
const MAX_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 3);
    totalEmpHrs += getWorkingHours(empCheck);
}
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log(`Total hours worked: ${totalEmpHrs}`);
console.log(`Total days worked: ${totalWorkingDays}`);
console.log(`Total wage: $${totalEmpWage}`);

//UC-6 Store daily wage along with total wage in an array
let dailyWageArray = [];
totalEmpHrs = 0;
totalWorkingDays = 0;

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkingHours(empCheck);
    totalEmpHrs += workHours;
    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWageArray.push(dailyWage);
}

totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Daily Wages:", dailyWageArray);
console.log(`Total Wage: $${totalEmpWage}`);

// UC7 - Perform operations using Array Helper Functions

// a. Calc total Wage 
let totalWageUsingReduce = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log(`Total Wage using reduce: $${totalWageUsingReduce}`);

// b. Show the Day along with Daily Wage
let dailyWageWithDay = dailyWageArray.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Daily Wages with Day:", dailyWageWithDay);

// c. Show Days when Full time wage of 160 were earned
let fullTimeWageDays = dailyWageArray.map((wage, index) => ({ day: index + 1, wage }))
                                   .filter(entry => entry.wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
                                   .map(entry => `Day ${entry.day}`);
console.log("Days with Full Time Wage:", fullTimeWageDays);

// d. Find the first occurrence when Full Time Wage
let firstFullTimeWageDay = dailyWageArray.find(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`First occurrence of Full Time Wage: $${firstFullTimeWageDay}`);

// e. Check if Every Element of Full Time Wage is truly holding Full time wage
let allFullTime = dailyWageArray.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is every element a Full Time Wage?", allFullTime);

// f. Check if there is any Part Time Wage
let anyPartTime = dailyWageArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part Time Wage?", anyPartTime);

// g. Find the number of days the Employee Worked
let numDaysWorked = dailyWageArray.filter(wage => wage > 0).length;
console.log(`Number of days Employee Worked: ${numDaysWorked}`);

// UC8 - Store the Day and the Daily Wage along with the Total Wage using Map
let dailyWageMap = new Map();
totalEmpHrs = 0;
totalWorkingDays = 0;

while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 3);
    let workHours = getWorkingHours(empCheck);
    totalEmpHrs += workHours;
    let dailyWage = workHours * WAGE_PER_HOUR;

    dailyWageMap.set(totalWorkingDays, dailyWage);
}
let totalWageUsingMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);

console.log("Day-wise Wages:", dailyWageMap);
console.log(`Total Wage computed using Map: $${totalWageUsingMap}`);
