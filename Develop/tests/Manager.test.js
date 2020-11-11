//extend employee class with office number and role as mananger
const Manager = require("../lib/Manager");

//create a test that will check for:

//can set office number
test("Can set manager office number", () => {
    const testNum = 12;
    const e = new Manager("Rose", 30, "rose@rose.com", testNum);
    expect(e.officeNum).toBe(testNum);
});


//getOfficeNum function returns office number
test("getOfficeNum function returns office number", () => {
    const testNum = 12;
    const e = new Manager("Rose", 12, "hi@hi.com", testNum);
    expect(e.getOfficeNum()).toBe(testNum);
});

//can return the proper role 
test("getRole function returns manager", () => {
    const testRole = "Manager";
    const e = new Manager("Rose", 5, "hi@hi2.com", 12);
    expect(e.getRole()).toBe(testRole);
});