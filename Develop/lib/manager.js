// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//manager will extend employee class
//manager will also have office number property
//engineer witll have getRole and get office number methods
const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;