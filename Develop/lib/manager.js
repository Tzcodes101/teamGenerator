//manager class also has office number 

//getRole returns manager 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email);
       this.officeNumber = officeNumber;
    }

    //be able to:

    getOfficeNumber() {
        return this.officeNum;
    }

    //get role (returns employee)
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;