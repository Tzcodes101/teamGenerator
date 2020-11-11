const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createTeam() {
    //create manager add name (validate is not empty), id(validate has numbers), email(validate has email characters), officenumber(validate has numbers),
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of your team manager?",
                validate: (name) => {
                    if (name !== "") {
                        return true;
                    }
                    return "Please enter a valid name of at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the ID of your team manager?",
                validate: (input) => {
                    if (input.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Email of your team manager?",
                validate: (input) => {
                    if (input.match(/\S+@\S+\.\S+/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is the office number of your team manager?",
                validate: (input) => {
                    if (input.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
            teamMembers.push(manager);
            chooseMembers();
        });
    }

    function chooseMembers() {
        inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I would not like to add any more team members"
            ]
        }
    ]).then(answer => {
        switch (answer.choice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "I would not like to add any more team members":
                break;
            default:
                renderTeam();
        }
    });
    }

    //create intern add name (validate has letters), id(validate is number), email(validate has email characters), school (validate has letters)
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of your intern?",
                validate: (name) => {
                    if (name !== "") {
                        return true;
                    }
                    return "Please enter a valid name of at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the ID of your intern?",
                validate: (input) => {
                    if (input.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Email of your intern?",
                validate: (input) => {
                    if (input.match(/\S+@\S+\.\S+/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the name of your intern's school?",
                validate: (input) => {
                    if (input !== "") {
                        return true;
                    }
                    return "Please enter a valid school name of at least one character.";
                }
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            chooseMembers();
        });
    }

    //create engineer, add name (validate has letters), id(validate is number), email(validate has email characters), github name(validate has letters),
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of your engineer?",
                validate: (name) => {
                    if (name !== "") {
                        return true;
                    }
                    return "Please enter a valid name of at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the ID of your engineer?",
                validate: (input) => {
                    if (input.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Email of your engineer?",
                validate: (input) => {
                    if (input.match(/\S+@\S+\.\S+/)) {
                        return true;
                    }
                    return "Please enter a valid number.";
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's github username??",
                validate: (input) => {
                    if (input !== "") {
                        return true;
                    }
                    return "Please enter a valid username of at least one character.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teamMembers.push(engineer);
            chooseMembers();
        });
    }

    //renderTeam, check if path exists, and if not, create one. Otherwise, write 
    function renderTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdir(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf8" );

    }

    addManager();
}

createTeam();