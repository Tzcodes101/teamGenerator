//manager class also has office number 

//getRole returns manager 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
       super(name, id, email);
       this.officeNum = officeNum;
    }

    //be able to:

    getOfficeNum() {
        return this.officeNum;
    }

    //get role (returns employee)
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;