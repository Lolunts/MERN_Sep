/*
What is destructuring?

How useful is it?

What are some use cases?

How do??
*/


let me = {
    firstName: "Steven",
    middleName: "Cody",
    lastName: "Thaller",
    age: 29,
    height: `5'11"`,
    ssn: 123121234,
    ccn: 1234123456785678
};

/* ********************** */
// If you want to re-assign the values to new variable names
let { firstName: steve } = me;

console.log(steve);
/* *********************** */

// This is the old way, and it's gross. 
// let newMe = {}

// newMe.firstName = me.firstName;
// newMe.middleName = me.middleName;
// newMe.lastName = me.lastName;
// newMe.age = me.age;
// newMe.height = me.height;


// OR we can destructure with a spread operator
let { ssn, ccn, ...newMe } = me;

console.log(me);
console.log(newMe);

// OLD WAY
// let firstName = me.firstName;
// let lastName = me.lastName;

//NEW WAY
let { firstName, lastName } = me;

let myArray = [1,3,true,"toes",-2]
let [...newarr] = myArray;

// OLD WAY
// let first = myArray[0];
// let weird = myArray[3];
// let neg = myArray[4];

let [first,,,weird,neg] = myArray;

/* ***************************************** */

let joe = {
    first: "Joe",
    last: "Smith"
}
let jane = {
    first: "Jane",
    last: "Doe"
}
let bill = {
    first: "Bill",
    last: "Gates"
}

let peeps = [joe,jane,bill];

let [one, two, three] = peeps;

let { jo } = one;
let { ja } = two;
let { bi } = three;