// TWO ALGOS TODAY WOOOOOOO

// Algo 1
// Given an array of integers, return indices of the two numbers such that the 
// elements at those indices add up to a specific target. You may not use the same element 
// twice

// Bonus if you can make it O(n) time complexity

// EXAMPLE: twoSum([2,11,7,15], 9) should return [0,2] because
// 2 + 7 = 9
function twoSum(arr, target){
    // We'll be using a dictionary for this.
    // We'll use the elements in the array as the keys, and the
    // indices of those elements as the values
    let nums = {};

    // Loop through the array
    for(let i = 0; i < arr.length; i++){
        // The trick here is that if the current element can be added to another previous element to add up to 
        // our target, then that other number must already be in the dictionary. So we check to see
        // if an entry in the dictionary exists with a key of target minus the curent element
        if(nums[target-arr[i]] != undefined){
            // If that entry exists, return an array with the value of that kv pair (its index), and the current 
            // index we're looking at
            return [nums[target-arr[i]], i]
        }
        // Otherwise, let's add the current element and index to the dictionary
        nums[arr[i]] = i;
    }

    // If we finish that loop without finding a sum, return an empty array.
    return [];
}

console.log(twoSum([2,11,7,15],9));


// Algo 2
// Given an unsorted array of integers, and a number, k, return the k most
// frequent elements in any order.

// EXAMPLE: (note, this solution is sorted for readability, it is not expected that you sort the response)
// kMostFrequent([1,1,1,2,2,3], 2) should return [1,2] because 1 is the most frequent, 2 is the 2nd most frequent,
function kMostFrequent(arr, k){
    // We'll be using what's called a frequency table. Basically,
    // a dictionary where each key is the number, and its value is the frequency
    let freqTable = {};
    // And of course, an array for our output.
    let kmost = [];

    // Loop through the array
    for(let i = 0; i < arr.length; i++){
        // If an entry in our frequency table doesn't exist, add it
        if(!freqTable[arr[i]]) {
            freqTable[arr[i]] = 1;
        } else {
            // Otherwise, add 1 to it.
            freqTable[arr[i]]++;
        }
    }

    // Now, what we need to do is go through our frequency table to figure out 
    // what the most frequent elements are, and add them to the output array
    // until the output array is k elements long
    while(kmost.length < k){
        // We'll need to know the max frequency and that number
        let maxFreq = 0;
        let maxNum = 0;

        // Loop through the elements in the dictionary
        for(let key in freqTable){
            // We'll need to make sure we get the most frequent element.

            // So if the current key value pair indicates a higher frequency than what's stored in
            // maxFreq,
            if(freqTable[key] > maxFreq){
                // We'll set our max frequency to said frequency
                maxFreq = freqTable[key];
                // and the correlating number to the key (since the key is the element itself)
                maxNum = parseInt(key);
            }
        }
        // Now, we can delete that max frequency entry from the dictionary
        delete freqTable[maxNum];

        // and push the number into our output array
        kmost.push(maxNum);

        // and run it back until the output array is k elements long
    }

    // Finally, return the array!
    return kmost;
}


console.log(kMostFrequent([1,1,1,2,2,4,3,4,4,3,4,3], 2));
