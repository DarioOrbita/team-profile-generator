const Employee = require('../lib/Employee');

test('employee values are correct', () => {
    const employee = new Employee('gustav', '42', 'email@geocities.gov');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});