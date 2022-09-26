const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = '';
        
    }

    getGitHub() {
        return `GitHub: ${this.github}`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;