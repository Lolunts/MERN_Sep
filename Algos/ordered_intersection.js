// Write a function that will find the ordered intersection of 
// two sorted arrays.

// The ordered intersection is a sorted array containing only values
// found in BOTH arrays.

// EXAMPLE:
// ordered_intersection([1,3,4,7], [3,5,7,9]) will return [3,7] because 3 and 7 are
// the only values in BOTH arrays.

function ordered_intersection(arr1, arr2){
    let i1 = 0;
    let i2 = 0;

    let inter = [];

    while(i1 < arr1.length && i2 < arr2.length){
        if(arr1[i1] == arr2[i2]){
            if(inter[inter.length-1] != arr1[i1]){
                inter.push(arr1[i1]);
            }

            i1++;
            i2++;
        }
        else if(arr1[i1] < arr2[i2]){
            i1++;
        }
        else {
            i2++;
        }
    }

    return inter;
}