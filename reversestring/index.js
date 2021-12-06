// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//? Place debugger after statement you want to review
//? CD into exercise directory | run node inspect index.js
//? Now you're in debugger mode | enter 'c' to continue until debugger is hit
//? Run repl in debugger to inspect variables
//! Must manually invoke function

//* Solution 1
    // Turn str into an array using string method split
    // Call reverse array method to reverse the array
    // Call join array method to turn the array back into a string
    // Then return
//const reverse = (str) => str.split('').reverse().join('');

//* Solution 2
const reverse = (str) => {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
        debugger;
    }
    return reversed;
};

//* Solution 3
// Use split string method to convert into an array of characters
// Then use reduce array method to combine the string in reverse order char + rev NOT rev + char
/* const reverse = (str) => {
    debugger;
    return str.split('')
        .reduce((rev, char) => char + rev, '')
}; */

reverse('asdf');

module.exports = reverse;