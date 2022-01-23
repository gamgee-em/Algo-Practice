// Create a function that takes an array of integers and sums the total
// sumArr([1, 2, 3]) --> 6
// sumArr([5, 10, 15, 6]) --> 36

//? iterative solution linear time complexity O(n) | using for loop
/* const sumArr = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(result);
        result += arr[i];
    };
    
    return result;
}; */

//? iterative solution #2 | using for of loop
/* const sumArr = arr => {

    let result = 0;
    for (let num of arr) {
        result += num;
    };
    return result;
}; */

//? iterative solution #3 | using forEach array method
/* const sumArr = arr => {
    let result = 0;
    arr.forEach(num => result += num);
    return result;
}; */

//? iterative solution #4 | one liner using reduce array method
const sumArr = arr => arr.reduce((result, num) => result + num, 0);

//? constant solution O(1)| only valid if array length is fixed to 3
/* const sumArr = arr => {
    return arr[0] + arr[1] + arr[2];
};
*/

module.exports = sumArr;