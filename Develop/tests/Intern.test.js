const Intern = require("../lib/Intern");

//create a test that will check for:

//can set intern school
test("Can set intern school", () => {
    const testSchool = "College";
    const e = new Intern("Rose", 30, "rose@rose.com", testSchool);
    expect(e.school).toBe(testSchool);
});


//getSchool returns school
test("getSchool function returns school", () => {
    const testSchool = "Test";
    const e = new Intern("Rose", 12, "hi@hi.com", testSchool);
    expect(e.getSchool()).toBe(testSchool);
});

//can return the proper role 
test("getRole function returns engineer", () => {
    const testRole = "Intern";
    const e = new Intern("Rose", 5, "hi@hi2.com", "school");
    expect(e.getRole()).toBe(testRole);
});