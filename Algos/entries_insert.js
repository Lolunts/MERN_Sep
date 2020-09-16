// ANOTHER TWO ALGO DAY WOOOOOOO


// Algo 1
// The goal here is to recreate the Object.entries method

// Note what happens when you run the following code snippet
let x = {
    name: "Cody",
    age: 29,
    email: "sthaller@codingdojo.com"
}

// console.log(Object.entries(x));

// This method converts an object into an array of arrays of key the key value
// pairs of the object.
function entries(object){
    // This one's preeeeetty simple. Let's start by creating our output array
    let oEntries = [];

    // Loop through each key in the object itself
    for(let key in object){
        // and push an array with index 0 as key, and index 1 as value, into the oEntries array
        oEntries.push([key, object[key]]);
    }
    // and finally, return that array.
    return oEntries;
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
    // Let's go crazy and use our entries function to break the object down
    let objectEntries = entries(object);
    // And start our query out
    let query = `INSERT INTO ${table_name} (`;

    // We need to populate the columns portion of the query, so let's do our first loop
    // through the objectEntries
    for(let i = 0; i < objectEntries.length; i++){
        // For this part, they're column names, so no quotes or anything is necessary.
        query += `${objectEntries[i][0]}`;
        // However, if it's not the last column, we want to separate with a comma and space
        if(i < objectEntries.length-1){
            query += `, `;
        }
    }

    // Now, 'let's squeeze in the middle portion, closing out the first portion and starting the values
    query += `) VALUES (`;

    // And let's loop one more time through the list
    for(let i = 0; i < objectEntries.length; i++){
        // Now, this time around, we do care if the value is a number or not.
        // If it isn't, we need to wrap it in ''
        if(isNaN(objectEntries[i][1])){
            // and add it to our query string
            query += `'${objectEntries[i][1]}'`;
        } else {
            // otherwise, just add it to our query string without quotes.
            query += `${objectEntries[i][1]}`;
        }

        // Like before, we need to separate each value with a comma and space, so 
        if(i < objectEntries.length-1){
            query += `, `;
        }
    }

    // and finally, let's  close out the query
    query += `);`;


    // and return it.
    return query;
}

console.log(insert("users", x));