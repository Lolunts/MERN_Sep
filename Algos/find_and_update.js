// TWO ALGOS WOOOO
// Algo 1:

// Write a function that takes a list of objects, and a criteria object, searches through the list and returns
// any objects that meet the criteria.

// EXAMPLE:
// const items = [
//     { firstName: "Bob", lastName: "Bobbert", age: 31 },
//     { firstName: "John", lastName: "Smith", age: 25 },
//     { firstName: "Bob", lastName: "Smith", age: 27 },
//     { firstName: "Bob", lastName: "White", age: 31 },
//   ];
// const searchCriteria = {
//     firstName: "Bob",
//     age: 31,
//   };
// findObjects(items, searchCriteria)
// should return the first and last objects in the items list
//   [
//     { firstName: "Bob", lastName: "Bobbert", age: 31 },
//     { firstName: "Bob", lastName: "White", age: 31 },
//   ];
function findObjects(items, criteria){
    // Let's use an array to keep track of our results
    let results = [];

    // And iterate through each item in our list of items
    for(let item of items){
        // We'll initialize a match variable to true. This is going to be used
        // to determine whether or not a match was found
        let match = true;

        // Now, we need to loop through the key/value pairs in the criteria
        // and check them against the item we're looking at
        for(let key in criteria) {
            // If the key doesn't exist, or if the values for that key do not match
            if(item[key] === undefined || item[key] != criteria[key]) {
                // toggle match to false and break out of this inner for loop
                match = false;
                break;
            }
        }
        // If we finished looping through the criteria and the item fits that
        // criteria, add it to our results
        if(match) {
            results.push(item);
        }
    }
    // Finally, return the results
    return results;
}


// ALGO 2:

// This function is similar to the previous one, but rather than just find one,
// find it and update it.
// The function that takes an id, an object with key value pairs (update values), and a list of
// objects (collection), and returns the updated.

// EXAMPLE:
// const students = [
//     {
//       id: 1,
//       name: "student1",
//       isLateToday: false,
//       lateCount: 15,
//       redBeltStatus: false,
//     },
//     {
//       id: 2,
//       name: "student2",
//       isLateToday: false,
//       lateCount: 1,
//       redBeltStatus: false,
//     },
//     {
//       id: 3,
//       name: "student3",
//       isLateToday: false,
//       lateCount: 0,
//       redBeltStatus: false,
//     },
//   ];
  
//   const id1 = 3;
//   const updateData1 = { redBeltStatus: true, isLateToday: true };
// findByIdAndUpdate(id1, updateData1, students) should return
// {
//     id: 3,
//     name: "student3",
//     isLateToday: true,
//     lateCount: 0,
//     redBeltStatus: true,
// }
function findByIdAndUpdate(id, updateValues, collection){
    // Let's start by looping through our collection
    for(let item of collection) {

        // If we've found the correct item
        if(item.id === id) {
            // Loop through the key value pairs in the update values object
            for(let key in updateValues) {
                // And assuming the key exists in the object, update the value accordingly.
                if(item[key] !== undefined) {
                    item[key] = updateValues[key];
                }
            }
            // After we've updated that one object, we're done and can return it!
            return item;
        }
    }
    // If we finished iterating through the entire collection and didn't 
    // return early, then that item doesn't exist, so adios!
    return null;
}