const partition = require('./partition');

// Write a function that performs quick sort. 
// HINTS:
//  1. Recursion
//  2. the partition function previously defined

function quickSort(arr, left=0, right=arr.length-1){
    // Our recursive break case is if the subset of the
    // array we're looking at is 1 element or nothing
    // (or if left and right are flat out wrong)
    if(left >= right){
        return;
    }

    // We need to figure out where our array is partitioned, so 
    // we call partition and store that returned index into a variable
    let i = partition(arr, left, right);


    // Then, our recursive call to quicksort the left side of that partition
    quickSort(arr, left, i-1);
    // and the right side
    quickSort(arr, i+1, right);
    // and then finally, return the array
    return arr;
}


let arr = [9,2,3,12,6,8,1];

console.log(quickSort(arr));