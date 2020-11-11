const Intern = require("../lib/Engineer");

//create a test that will check for:

//if Intern is an object
test("Intern is an object", function() {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
})

//if you can set the name
test("Can set intern name", function () {
    const name = "Rose";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

//can set the ID
test("Can set engineer id", function() {
    const testId = 80;
    const e = new Intern("Rose", testId);
    expect(e.id).toBe(testId);
})

//can set email
test("Can set intern email", () => {
    const testEmail = "hi@hi.com";
    const e = new Intern("Rose", 30, testEmail);
    expect(e.email).toBe(testEmail);
});

//can set intern school
test("Can set intern school", () => {
    const testSchool = "College";
    const e = new Intern("Rose", 30, "rose@rose.com", testSchool);
    expect(e.school).toBe(testSchool);
});

//can get name with proper function
test("getName function returns name", () => {
    const testName = "Rose";
    const e = new Intern(testName);
    expect(e.getName()).toBe(testName);
});

//can get id with proper function
test("getId function returns id", () => {
    const testId = 6;
    const e = new Intern("Rose", testId);
    expect(e.getId()).toBe(testId);
});

//can get email with proper function
test("getEmail function returns email", () => {
    const testEmail = "Hi@hi.com";
    const e = new Intern("Rose", 8, testEmail);
    expect(e.getEmail()).toBe(testEmail);
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