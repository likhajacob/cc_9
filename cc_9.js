// Task 1: Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;//name of the employee
        this.id = id;//id of the employee
        this.department = department;//department of the employee
        this.salary = salary;//salary of the employee
    }; // end of constructor
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    } // end of details
    calculateAnnualSalary() {
        return this.salary * 12;//annual salary of the employee
    } 
};// end of employee class

const emp1 = new Employee('Alice Johnson', 101, 'Sales', 5000);

console.log(emp1.getDetails());//Employee: Alice Johnson, ID: 101, Department: Sales, Salary: 5000
console.log("Expected Salary:", emp1.calculateAnnualSalary());//60000