// Write a function that takes an array, and sorts it using
// insertion sort.

function insertionSort(array){
    // Since a single element is technically already sorted, we'll start at the second index,
    // iterating through to the end of the array
    for(let i = 1; i < array.length; i++){
        // We can't just change i, because it's kind of necessary
        // for moving onto the next element, so we'll create a new
        // variable to keep track of the index as we swap our way
        // down to where the element is to be inserted
        let index = i;

        // Now, for the part where we swap it on down!

        // Basically, we're going to swap to the left as long as
        // the element is less than the array to its left, or it reaches
        // index 0. Because there's nothing to the left of index zero.
        while(index > 0 && array[index] < array[index-1]) {
            // Swap with the element to the left

            let temp = array[index];
            array[index] = array[index-1];
            array[index-1] = temp;

            // array[index] = array[index] + array[index-1];
            // array[index-1] = array[index] - array[index-1];
            // array[index] = array[index] - array[index-1];

            

            // and decrement our index
            index--;
        }
    }

    // Finally, return the sorted array!
    return array;
}

console.log(insertionSort([3,2,9,6,1]));