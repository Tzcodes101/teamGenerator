//require Employee from the proper path
const { TestScheduler } = require("jest");
const Employee = require("../libEmployee");

//create a test that will check for:

//if employee is an object
test("Employee is an object", function() {
    var employee = new Employee();
    expect(typeof(employee).toBe("object"));
})

//if you can set the name

//can set the ID

//can set emp email

//can get name with proper function

//can get id with proper function

//can get email with proper function

//can return the proper role 

