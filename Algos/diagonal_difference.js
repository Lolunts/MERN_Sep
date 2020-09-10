// Write a function that takes a matrix (2D array) as a parameter,
// and finds the absolute difference of its diagonals.

// EXAMPLE:
// [ [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ] ]

// The diagonal difference is 2:
// left to right diagonal: 1 + 5 + 9 = 15
// right to left diagonal: 3 + 5 + 7 = 15
// absolute difference: 0

function diagonal_difference(arr){
    // We need to keep track of the sums of each diagonal
    let sum1 = 0;
    let sum2 = 0;

    // Let's calculate the sum of the diagonal from left to right AND the one from right to left

    // LEFT TO RIGHT
    // Basically, the coordinates of each number will be [0][0], [1][1], [2][2], etc. 
    // So this for loop is pretty easy.

    // RIGHT TO LEFT
    // This one is a bit more complicated. In a 3x3 array, the coordinates will look
    // like so:

    // [0][2]
    // [1][1]
    // [2][0]
    // So we can see that mathematically, for an nxn matrix, and looping from 0 to n
    // with i as our iterator, the coordinates should be [i][n-i]
    for(let i = 0; i < arr.length; i++) {
        // Add each element to our sum1
        sum1 += arr[i][i];
        // NOTICE: because we're dealing with the index, it's not going to be 
        // arr.length-i, but arr.length-1-i because arr.length in a 3x3 is 3, but the 
        // index of the last element is 2
        sum2 += arr[i][arr.length-1-i];
    }

    // finally, let's calculate and return the absolute value of the difference
    return Math.abs(sum1 - sum2)
}

// BONUS ALGO!!
// take yesterday's algorithm (ordered_intersection) and modify it to work with an UNsorted array
// HINT: Remember we talked about using a dictionary!!
function unordered_intersection(arr1, arr2){
    // Like I mentioned, the secret sauce here is a dictionary
    let dict= {};
    // and of course, we need to push the relevant values into an array
    let inter = [];

    // Step 1 is relatively simple:

    // For each element in arr1, add a key value pair to the dictionary
    // where the key is the element of the array we're looking at,
    // and the value is true. This will come into play later
    for(let i = 0; i < arr1.length; i++) {
        dict[arr1[i]] = true;
    }

    // Now, we need to loop through the second array
    for(let i = 0; i < arr2.length; i++) {
        // If there is a key value pair in the dictionary with a key of
        // the element of the array we're looking at, it means it's part of the 
        // intersection!
        if(dict[arr2[i]] == true){
            // So we push it into our return array
            inter.push(arr2[i]);
            // And, to avoid duplicate entries being added into our return array,
            // let's flip the value in the dictionary to false.
            dict[arr2[i]] = false;
        }
    }

    return inter;
}
