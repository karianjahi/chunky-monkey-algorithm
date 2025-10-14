/*
Chunky-Monkey-Algorithm: An algorithm that takes an array as first argument and a number as second argument. The function splits the array into smaller arrays of length equal to the second argument and returns them as a two dim array.
*/

const chunkArrayInGroups = (array, num) => {
    const arrayLength =array.length;
    const noOfSubArrays = Math.ceil(arrayLength/num);
    let newArray = [];
    let subArray = [];
    let count = 0;
    for(let i=0; i<noOfSubArrays; i++){ // iterate through the batches required to form the final nested array
        subArray = []; // This will be the inner array that shall constitute items of the outer array
        for(j=count; j<arrayLength; j++){ // count tracks the index of the items
            subArray.push(array[j]) // append item to subarray
            if (subArray.length === num && j !== arrayLength-1) { // Once the subarray is full before we exhaust all array items, we want to update our newArray
                newArray.push(subArray);
                subArray = []; // Initialize the subArray to start all-over again but continue from where we left through the count tracking variable
            }

            if (j==arrayLength - 1 && subArray.length !==0) { // In case we are done with looping over the array and still some items are not appended to the array, we want to append them 
                newArray.push(subArray);
            }
            count++;
        };
        return newArray;


 

    }
    console.log(`Array length: ${arrayLength}  no. of sub arrays: ${noOfSubArrays}`);
}

// console.log(chunkArrayInGroups([2, 5, 1, 5, 9, 8, 3], 3))
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));