// Write a function that takes an array of numbers, and returns
// an array of objects where each object contains the number itself and its index.

// A number is non-consecutive if it is NOT exactly 1 greater than the previous element.
// The first element is not considered non-consecutive.

// EXAMPLE
// non_consecutive([1,2,3,4,6,7,8,10])
// returns [
//      { i: 4, n: 6 }, -> because 6 is not exactly 1 greater than 4
//      { i: 7, n: 10}  -> because 10 is not exactly 1 greater than 8
// ]

function non_consecutive(arr){
    // Let's create our output array
    let non_con = [];

    // And let's loop through the array! We'll start at i = 1
    // since we won't be considering the first element to be 
    // non-consecutive
    for(let i = 1; i < arr.length; i++){
        // If the previous number + 1 equals the current number, than it's consecutive.

        // So let's see if that's NOT the case
        if(arr[i-1]+1 !== arr[i]){
            // If the current number is NOT the previous number plus 1, it's non-consecutive,
            // so we push the object containing the index and number into the non_con array!
            non_con.push({ i: i, n: arr[i] });
        }
    }

    return non_con;    
}