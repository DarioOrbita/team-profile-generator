const Manager = require('../lib/Manager');

test('create a manager', () => {
    const manager = new Manager('Mai', '1', 'email@email.com', '206');
    
    expect(manager.name).toBe('Mai');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toBe('206');
});