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
//Task 3 - Created Company Class

class Company { //Creating class Company
    constructor(name, employees) { //Constructor setting up specified properties
        this.name = name;
        this.employees = []; //Initializing empty employees array
    };
    
    addEmployee(employee) { //Setting up addEmployee method
        this.employees.push(employee); //.push() employee to the employees array
    }

    listEmployees() { //Setting up listEmployees method
        this.employees.forEach(employee => {console.log(employee.getDetails())}); //console.log the getDetails method forEach employee in employees array
    }

    calculateTotalPayroll() { //Task 4 - Add a method calculateTotalPayroll() to the Company class
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); //Task 4 - returns the sum of all employee salaries (including managers)
    }

    promoteToManager (employee, teamSize) { //Task 5 - Add a method promoteToManager(employee, teamSize) in the Company class.
        const index = this.employees.indexOf(employee); //Finding employee position in employees array as index
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); //Creating a Manager with the properties of employee saved at index
    }
}

const company = new Company("TechCorp"); //Test case
company.addEmployee(emp1); //Adding emp1 using addEmployee method
company.addEmployee(mgr1); //Adding mgr1 using addEmployee method
company.listEmployees(); //Logging