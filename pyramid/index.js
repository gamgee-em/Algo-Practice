// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

//* Solution 1
/* const pyramid = (n) => {
    const mid = Math.floor((2 * n - 1) / 2);

    for (let i = 0; i < n; i++) {
        let level = '';

        for (let j = 0; j < 2 * n - 1; j++) {

            if (mid - i <= j && mid + i >= j) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
};
 */

//* Solution 2 | recursive
const pyramid = (n, row = 0, col = 0, level = '') => {
    if (n === row) return;

    // use to get mid point of string
    const mid = Math.floor((2 * n - 1) / 2);

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    } 
    
    if (mid - row <= col && mid + row >= col) {
        level += '#';
    } else {
        level += ' ';
    };
    //col++;
    pyramid(n, row, col+1, level);
};

module.exports = pyramid;