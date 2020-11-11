//create intern class, also has school

//get school

//getRole returns intern
class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    //get role (returns employee)
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;