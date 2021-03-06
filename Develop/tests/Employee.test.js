//require Employee from the proper path
const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

//create a test that will check for:

//if employee is an object
test("Employee is an object", function() {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
})

//if you can set the name
test("Can set employee name", function () {
    const name = "Rose";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

//can set the ID
test("Can set employee id", function() {
    const testId = 80;
    const e = new Employee("Rose", testId);
    expect(e.id).toBe(testId);
})

//can set emp email
test("Can set employee email", () => {
    const testEmail = "hi@hi.com";
    const e = new Employee("Rose", 30, testEmail);
    expect(e.email).toBe(testEmail);
});

//can get name with proper function
test("getName function returns name", () => {
    const testName = "Rose";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

//can get id with proper function
test("getId function returns id", () => {
    const testId = 6;
    const e = new Employee("Rose", testId);
    expect(e.getId()).toBe(testId);
});

//can get email with proper function
test("getEmail function returns email", () => {
    const testEmail = "Hi@hi.com";
    const e = new Employee("Rose", 8, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});

//can return the proper role 
test("getRole function returns employee", () => {
    const testRole = "Employee";
    const e = new Employee ("Rose", 5, "hi@hi2.com");
    expect(e.getRole()).toBe(testRole);
});

