// TODO: Write code to define and export the Employee class
//employee will have name, id, and email properties
//employee will have getName, getID, getEmail, and getRole methods
//module will be exported
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
