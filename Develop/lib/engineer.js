//create engineer class with github username

//get github

//getRole returns engineer

//create employee class with name, id, email
class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //be able to:

    //get name
    getName() {
        return this.name;
    }

    //get id
    getId() {
        return this.id;
    }

    //get email
    getEmail() {
        return this.email;
    }

    //get role (returns employee)
    getRole() {
        return "Employee";
    }
}

module.exports = Engineer;