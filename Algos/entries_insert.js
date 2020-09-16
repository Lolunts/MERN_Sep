// ANOTHER TWO ALGO DAY WOOOOOOO


// Algo 1
// The goal here is to recreate the Object.entries method

// Note what happens when you run the following code snippet
let x = {
    name: "Cody",
    age: 29,
    email: "sthaller@codingdojo.com"
}

console.log(Object.entries(x));

// This method converts an object into an array of arrays of key the key value
// pairs of the object.
function entries(object){

}


// Algo 2
// Write a function that will take two parameters: a table name, and an object (filled with key value pairs obviously)
// and returns a SQL command to insert that object into that table.

// EXAMPLE:
// let obj = { first_name: "Steven", last_name: "Thaller", email: "sthaller@codingdojo.com" }
// insert("users", obj) will return:
// "INSERT INTO users (first_name, last_name, email) VALUES ('Steven', 'Thaller', 'sthaller@codingdojo.com');"

// KEEP IN MIND!! the number of columns in the table you're inserting this into depends entirely on the object,
// so don't bank on the 3 columns
function insert(table_name, object){
    
}