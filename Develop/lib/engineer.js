const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, ghUsername) {
       super(name, id, email);
       this.ghUsername = ghUsername;
    }

    //be able to:

    getGhUserName() {
        return this.ghUsername;
    }

    //get role (returns employee)
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;