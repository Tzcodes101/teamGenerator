const Engineer = require("../lib/Engineer");

//create a test that will check for:

//can set engineer github username
test("Can set github username", () => {
    const gh = "Rose22";
    const e = new Engineer("Rose", 30, "rose@rose.com", gh);
    expect(e.ghUsername).toBe(gh);
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