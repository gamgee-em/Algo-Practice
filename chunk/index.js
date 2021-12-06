// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//* Solution 1
/* const chunk = (array, size) => {
    let chunkedArr = [];

    array.forEach((num, i) => {

        const last = chunkedArr[chunkedArr.length - 1];

        !last || last.length === size ?
            chunkedArr.push([num]) :
            last.push(num);
    })
    return chunkedArr;
}; */

//* Solution 2
/* const chunk = (array, size) => {

    let chunkedArr = [];

    array.forEach((num, i) => {

        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === size) {
            chunkedArr.push([num]);
        } else {
            last.push(num);
        };
    })
    return chunkedArr;
}; */

//* Solution 3
const chunk = (array, size) => {

    let chunkedArr = [];

    for (num of array) {
        let last = chunkedArr[chunkedArr.length - 1];
        // could replace if statement with ternary operator
        if(!last || last.length === size) {
            chunkedArr.push([num]);
        } else {
            last.push(num);
        }
    }
    return chunkedArr;
};

module.exports = chunk;
