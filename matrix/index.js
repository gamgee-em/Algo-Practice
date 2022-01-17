// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = (n=5) => {

    let results = [];



    // create empty array of n arrays called results
 
    for (let i = 0; i < n; i++){  
        results.push([]);
        // results[i] = [];
    };

    // create counter variable
    let counter = 1;

    // create variables to keep track of start/end columns
    let startCol = 0;
        // arrays are 0 indexed so minus 1 from n to compare n to i
    let endCol = n - 1;

    // create variable to keep track of start row
    let startRow = 0;

    // create variable to keep track of end row 
    // arrays are 0 indexed so minus 1 from n to compare n to i
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {

        // top row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        };

        // increment startRow to move down a row
        startRow++;

        // right col
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        };

        // decrement endCol to move left a column
        endCol--;
        
        // bottom row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }

        // decrement endRow to move up a row
        endRow--;

        // start col
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        };

        // increment startCol to move right a column
        startCol++;

    };

    console.log('End Result: ', results);
    return results;

};

module.exports = matrix;
