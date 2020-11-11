const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //be able to:

    getSchool() {
        return this.school;
    }

    //get role (returns employee)
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;