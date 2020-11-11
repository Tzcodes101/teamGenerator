const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


//create manager add name (validate is not empty), id(validate has numbers), email(validate has email characters), officenumber(validate has numbers),

//create intern add name (validate has letters), id(validate is number), email(validate has email characters), school (validate has letters)

//create engineer, add name (validate has letters), id(validate is number), email(validate has email characters), github name(validate has letters),

//renderTeam

//give user options to build their team
function createTeam() {
    console.log("Create team called");
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Would you like to build your team?",
            choices: [
                "Yes",
                "No"
            ]
        },
    ]).then(answer => {
        switch(answer.choice) {
            case "Yes":
                addManager();
                break;
            case "No":
                break;
            default:
                addManager();
        }
    });

}

createTeam();