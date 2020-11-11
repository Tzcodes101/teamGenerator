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

//can get name with proper function

//can get id with proper function

//can get email with proper function

//can return the proper role 

