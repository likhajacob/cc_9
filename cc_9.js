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
// Task 2: Creating a Manager Class

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) { // constructor for manager class
        super(name, id, department, salary); // calling the constructor of the parent class
        this.teamSize = teamSize; // team size of the manager
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    } // end of details
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;//bonus of the manager
    }
}; // end of manager class

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());//Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5

console.log("Expected Bonus:", mgr1.calculateBonus());//Expected Bonus: 7200