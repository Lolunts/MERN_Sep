// Write a function that partitions an array. What I mean by this, is
// take the right-most index, and re-arrange the elements in the array so that the 
// number was at the right-most index is in a position such that everything
// to the left of it is less than it, and everything to the right of it is
// greater than it, and return the new index of that element

// EXAMPLE: let arr = [9,2,45,3,12]
// partition(arr) returns 3, and arr is now
// [9,2,3,12,45]
function partition(arr = [], left = 0, right = arr.length-1){
    // Here's just a quick little check: if the left index is greater than or equal to the
    // right index, just return it.
    if(left >= right) {
        return left;
    }
    // This partition method functions with the rightmost element being
    // our pivot element.

    // Let's start keeping track of where our pivot element is GOING to end up
    let nP = left;
    

    // BIG PICTURE FOR THIS FOR LOOP: We want to shift things around
    // so that when we move our pivot element into its place, everything to the left
    // is less than it, and everything to the right is greater than it.
    
    // Now, we want to loop from the left-most element
    // to the element before our pivot element
    for(let i = left; i < right; i++) {
        // If the element we're looking at is less than our pivot
        if(arr[i] < arr[right]){
            // We want to swap the current element with the element at our
            // new Pivot index
            [arr[i], arr[nP]] = [arr[nP], arr[i]];

            // and increment the new pivot index by 1.
            nP++;
        }
    }


    // Finally, to actually move our pivot element into the place it belongs, we'll swap our pivot element
    // with the element at our new pivot index.
    [arr[nP], arr[right]] = [arr[right], arr[nP]];

    // And return the new pivot index.
    return nP;
}

module.exports = partition;