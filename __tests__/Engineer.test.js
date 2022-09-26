const Engineer = require('../lib/Engineer');

test('create an engineer', () => {
    const engineer = new Engineer('steve', '2', 'steve@steve.com', 'steve@github.com');
    
    expect(engineer.name).toBe('steve');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('steve@steve.com');
    expect(engineer.github).toBe('steve@github.com');
});