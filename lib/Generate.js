const inquirer = require('inquirer');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Generate {
    constructor() {
        const employeesArr = [];
    }

    generateProfile() {
        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: 'Please enter a name'
        })
    }
}

