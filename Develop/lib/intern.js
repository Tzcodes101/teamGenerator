// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//intern will extend employee class
//intern will also have school name property
//intern witll have getRole and get school methods
const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;