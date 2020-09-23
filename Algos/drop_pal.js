// TWO ALGOS WOOOOOO

// Algo 1 - Drop It
// Write a function that takes 2 parameters: an array, and a callback function.
// The goal is to make it so this function will remove elements from the array (starting at index zero)
// for every element UNTIL the callback function returns true.

//dropIt([1,2,3,4,5], elem => elem == 3); --> this should return [3,4,5]
function dropIt(arr, callback){
    // The key to this algo is figuring out our condition.
    // We want to remove each element, starting at index 0, UNTIL a condition
    // is met, or the array is empty. That condition is that the callback function returns true.
    // So:
    while(arr.length > 0 && !callback(arr[0])){
        // And to remove the first element of the array, 
        // we use the .splice function
        arr.splice(0,1);
    }
    // If we broke out of the while loop, either we hit a true return on that callback, or
    // the array is entirely empty now.
    return arr;
}


// Algo 2 - Can it become a palindrome?

// Write a function that takes a string as a parameter, and determines whether
// or not the characters of the string could potentially be rearranged to create a 
// palindrome.

// EXAMPLE:
// canPali("toccata") would return true, because the letters could be rearranged to 
// make it "tacocat", but canPali("green") would return false because there can't be 
// a palindrome from that.
function canPali(string){
    // Let's build a frequency table!
    let charCountDict = {}

    // And let's go through the string and populate the frequency table!
    for(let i = 0; i < string.length; i++) {
        if(charCountDict[string[i]] === undefined) charCountDict[string[i]] = 1;
        else charCountDict[string[i]]++;
    }

    // Now, our next step is going to be different based on whether the string has an
    // even or odd number of characters.
    if(string.length%2 == 0) {
        // if it's even, there should not be a single character that's in the string
        // an odd number of times.
        for(let key in charCountDict){
            // if there is, it can't possibly be a palindrome.
            if(charCountDict[key]%2 == 1) return false;
        }
    } else {
        // if it's an odd length string, we can have ONE character appear
        // an odd number of times

        // so let's keep a counter of that.
        let count = 0;

        for(let key in charCountDict){
            // if a character appears an odd number of times, add 1 to the counter
            if(charCountDict[key]%2 == 1) count++;
            // if we find that more than 1 character appears an odd number of times, then it can't
            // be a palindrome!
            if(count > 1) return false;
        }
    }

    // If we made it out of the for loop, it can be a palindrome!
    return true;
}