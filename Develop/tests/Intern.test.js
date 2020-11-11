const Intern = require("../lib/Engineer");

//create a test that will check for:

//if Intern is an object
test("Intern is an object", function() {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
})

//if you can set the name
test("Can set engineer name", function () {
    const name = "Rose";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

//can set the ID
test("Can set engineer id", function() {
    const testId = 80;
    const e = new Engineer("Rose", testId);
    expect(e.id).toBe(testId);
})

//can set email
test("Can set engineer email", () => {
    const testEmail = "hi@hi.com";
    const e = new Engineer("Rose", 30, testEmail);
    expect(e.email).toBe(testEmail);
});

//can set engineer github username
test("Can set github username", () => {
    const gh = "Rose22";
    const e = new Engineer("Rose", 30, "rose@rose.com", gh);
    expect(e.ghUsername).toBe(gh);
})
//can get name with proper function
test("getName function returns name", () => {
    const testName = "Rose";
    const e = new Engineer(testName);
    expect(e.getName()).toBe(testName);
});

//can get id with proper function
test("getId function returns id", () => {
    const testId = 6;
    const e = new Engineer("Rose", testId);
    expect(e.getId()).toBe(testId);
});

//can get email with proper function
test("getEmail function returns email", () => {
    const testEmail = "Hi@hi.com";
    const e = new Engineer("Rose", 8, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});


test("getEmail function returns email", () => {
    const testEmail = "Hi@hi.com";
    const e = new Engineer("Rose", 8, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});

//getGhUSername returns github user name
test("getGhUsername returns github username", () => {
    const gh = "Test";
    const e = new Engineer("Rose", 12, "hi@hi.com", gh);
    expect(e.getGhUserName()).toBe(gh);
});

//can return the proper role 
test("getRole function returns engineer", () => {
    const testRole = "Engineer";
    const e = new Engineer("Rose", 5, "hi@hi2.com");
    expect(e.getRole()).toBe(testRole);
});