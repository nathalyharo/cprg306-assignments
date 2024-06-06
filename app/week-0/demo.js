var employee = {
    name: 'John Doe',
    id: 12345,
    department:{
        id: 1,
        name: 'IT Department',
        head: 'Sam Jones'
        // you can continue the expansion of the object
    }
}

console.log(employee.name); // gets the name of employee
console.log(employee.department.name); // gets the department name

const student = {
    id: 12345,
    name: 'John Doe',
    GPA: 3.5
}

// const id = student.id;
// const name = student.name;
// const GPA = student.GPA;

// structured assignment
const {id, name, GPA} = student;

// to map a variable to a different name
const {id: studentId, name: studentName, GPA: studentGPA} = student;

// template literals
const greeting = 'Hello';
const nameTwo = 'John Doe';
const message = `${greeting} ${nameTwo}`;

// function notation 
// have their own this, can be hoisted (called before defined)
// good for object methods and constructors
function greet(name){
    return "Hello, " + name;
}

console.log(greet('John Doe'));

// arrow function notation and template literal
// don't have their own this, cannot be hoisted
// good for callbacks 
const greetTwo = (name) => {
    return `Hello, ${name}`;
}

console.log(greetTwo('John Foe'));

// arrow function concise notation
// same functions as above but easier to read
const greetThree = name => `Hello, ${name}`;

console.log(greetThree('John Loe'));