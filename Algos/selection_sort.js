// Write a function that takes an array of numbers, and uses selection sort to sort it

function selectionSort(array){
    // The jist of selection sort is this:
    // We want to find the largest element and move it to the last index,
    // then find the second largest element and move it to the second to last index, etc. etc.

    // So, our outer for loop will run from back to front
    for(let end = array.length-1; end >= 0; end--){
        // Now, given we want to find the largets element, we'll
        // start by labeling our element at index 0 as the largest
        let max = 0;

        // But, unless we loop through to find the REAL largest value,
        // we'll be stuck assuming index 0 is our biggest element.
        for(let i = 1; i <= end; i++){
            // At each index, we'll check to see if that element
            // is larger than our previously deemed max number
            if(array[max] < array[i]){
                // If it is, let's set max to be that index
                max = i;                
            }
        }

        // After looping through from 0 to our next largest index,
        // we'll swap that max value with the last index
        let temp = array[max];
        array[max] = array[end];
        array[end] = temp;
    }

    // And finally, return the array
    return array;
}

console.log(selectionSort([4,2,9,5,1]));

