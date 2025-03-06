const EMPLOYEE_PRESENT = 1;

let empCheck = Math.floor(Math.random() * 2);
if (empCheck === EMPLOYEE_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}