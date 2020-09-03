// This is going to be a 2 parter.

// Part 1: Write a function that will take 2 sorted arrays, and merge them together.
// Don't worry about doing it in place. Just create a new array and combine the 2 parameter
// arrays
function merge(arr1, arr2){
    //Like I mentioned, don't worry about doing this one in place. 
    let result = [];
    // We'll keep track of indexes in arr1 and arr2. These will be used to
    // check each element to see which is larger/smaller, and push them into the 
    // result array accordingly.
    let i1 = 0; 
    let i2 = 0;


    // First loop: going through both arrays until ONE of them reaches the end
    while(i1 < arr1.length && i2 < arr2.length){
        // If the element at index i1 in arr1 is smaller than the
        // element at index i2 in arr2, push the element from arr1
        // into the result array, and increment i1 (so we can look at the
        // NEXT element next iteration)
        if(arr1[i1] < arr2[i2]){
            result.push(arr1[i1]);
            i1++;
        }
        // Otherwise, push the element at i2 in arr2 into the results array and
        // increment i2
        else {
            result.push(arr2[i2]);
            i2++;
        }

        // This will run until at least one of the arrays reaches the end
    }

    // Now, we'll have another loop to "finish" the rest of the elements in 
    // arr1. This will ONLY run if i1 did not reach the end of arr1
    while(i1 < arr1.length){
        // push the rest of the elements into the result array
        result.push(arr1[i1]);
        i1++;
    }

    // Finally, if i1 DID reach the end of arr1, we need to push
    // the rest of arr2 into the result array
    while(i2 < arr2.length){
        result.push(arr2[i2]);
        i2++;
    }

    // and finally, return the result array
    return result;
}

// Part 2: Write a function that performs merge sort. 
// This will involve 2 key points:
//  1. Recursion
//  2. The previously defined merge function
function mergeSort(arr){
    // BREAK CASE: if the sub-array we're looking at is
    // 1 element, it's sorted, and we need to return it
    if(arr.length == 1){
        return arr;
    }

    // We need to split the array down the middle, so let's calculate that mid-point.
    let mid = Math.floor(arr.length/2);
    // Now, let's actually split up the array. I'll be using .slice, which fortunately
    // has a time complexity of O(n), so we're all good!
    
    // The left subarray will be from index 0 up to the mid point
    let left = arr.slice(0,mid);
    // and the right subarray will be mid through the end
    let right = arr.slice(mid);

    // and now, for the recursive call(s). This is a tricky one. 
    // We can do this in a couple of separate steps, or combine them into one.

    // MULTI-STEP APPROACH:
    
    //     // make the two recursive calls separately and store the returned arrays into variables
    // let arrLeft = mergeSort(left);
    // let arrRight = mergeSort(right);

    // // and THEN merge them together and return
    // return merge(arrLeft, arrRight);
    
    
    // ONE-LINER
    // This will recursively call mergeSort to the left and right subarrays,
    // and then merge their resulting arrays.
    return merge(mergeSort(left), mergeSort(right));
}



console.log(mergeSort([9,2,4,5,1,3,6,11]))