//require Employee from the proper path
const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

//create a test that will check for:

//if employee is an object
test("Employee is an object", function() {
    var e = new Employee();
    expect(typeof(e)).toBe("object");
})

//if you can set the name
test("Can set employee name", function () {
    var name = "Rose";
    var e = new Employee(name);
    expect(e.name).toBe(name);
})

//can set the ID

//can set emp email

//can get name with proper function

//can get id with proper function

//can get email with proper function

//can return the proper role 

