//create engineer class with github username

//get github

//getRole returns engineer

class Engineer {
    constructor(name, id, email, ghUsername) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.ghUsername = ghUsername;
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

    getGhUserName() {
        return this.ghUsername;
    }

    //get role (returns employee)
    getRole() {
        return "Employee";
    }
}

module.exports = Engineer;