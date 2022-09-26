class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = '';
        this.email = '';
        
    }

    getname() {
        return `Name: ${this.name}`
    }

    getID() {
        return `ID: ${this.id}`
    }

    getEmail() {
        return `Email: ${this.email}`
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;