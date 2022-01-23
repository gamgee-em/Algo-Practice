/* 
    Given two integers a and b, 
    which can be positive or negative, 
    find the sum of all the integers between and including them and return it. 
    If the two numbers are equal return a or b.
    a and b are not ordered!
*/

// linear solution 0(n) | using for loop
const sumOfTwo = (a, b) => {
    if (a === b) return a;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    };
    return sum;
}; 


// iterative solution
/* const sumOfTwo = (a, b) => {
    if (a === b) return a;
    
    let result = 0;
    const minMax = [ Math.min(a,b), Math.max(a, b) ];

    for (let i = minMax[0]; i <= minMax[1]; i++) {
        result += i;
    };
    return result;
}; */

// constant solution O(1) 
/* const sumOfTwo = (a, b) => {
    if (a === b) return a;
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    return (max - min + 1) * (min + max / 2);
}; */

sumOfTwo(10, -20);

module.exports = sumOfTwo;