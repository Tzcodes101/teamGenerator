// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//engineer will extend employee class
//engineer will also have gitHub username property
//engineer witll have getRole and get username methods
const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.gitHubUsername = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;