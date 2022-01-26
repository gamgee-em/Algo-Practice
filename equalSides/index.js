/* // TODO:
    You are going to be given an array of integers.
    Your job is to take that array and find an index N 
    where the sum of the integers to the left of N 
    is equal to the sum of the integers to the right of N. 
    If there is no index that would make this happen, return -1. 
*/

/* //! input --> output
{1, 2, 3, 4, 3, 2, 1} --> returns 3
{1, 100, 50, -51, 1, 1} --> returns 1
 */

//* iterative solution | O(n)
/* 
const equalSides = arr => {
    let left = 0;
    let right = 0;

    for (let i = 0; i < arr.length; i++) {
        right += arr[i];
    };

    for (let i = 0; i < arr.length; i++) {
        right -= arr[i];
        if (left === right) return i;
        left += arr[i];
    };
    return - 1;
}; 
*/

/* 
const equalSides = arr => {
    let leftSum = 0;
    // sum each elemnt of arr into a single variable
    let rightSum = arr.reduce((right, num) => {
        return right + num;
    }, 0);
    // loop over arr length
    for(let i = 0; i < arr.length; i++) {
        // subtract arr[i] from rightSum
        rightSum -= arr[i];
        // check if rightSum & leftSum are equal
        if (rightSum === leftSum) {
            // if true return the index where the left & right side of the array equal one another
            return i;
            // if rightSum & leftSum are not equal add arr[i] to leftSum
        } else {
            leftSum += arr[i];
        };
    };
    // if at no point the left and right side of the array can be summed to equal one another return -1
    return -1;
};
*/

//* concise solution
const equalSides = arr => {
    let leftSum = 0;

    let rightSum = arr.reduce((total, curr) => total + curr, 0);

    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i];
        if (rightSum === leftSum) return i;
        leftSum += arr[i]
    };
    return -1;
};

module.exports = equalSides;