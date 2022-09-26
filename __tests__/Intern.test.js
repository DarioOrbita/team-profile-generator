const Intern = require('../lib/Intern');

test('create an intern', () => {
    const intern = new Intern('Carl', '3', 'carl@notsteve.com', 'University of Minnesota');
    
    expect(intern.name).toBe('Carl');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('carl@notsteve.com');
    expect(intern.school).toBe('University of Minnesota');
});