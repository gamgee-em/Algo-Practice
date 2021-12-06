// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//* Solution 1
/* const maxChar = (str) => {

    return str.split('').sort((a,b) => {
        return a - b;
    }).pop();

}; */

//* Solution 2
/* const maxChar = (str) => {

    const compare = (a, b) => {
        return a - b;
    } 

    return str.split('').sort(compare).pop();

}; */

//* Solution 3
const maxChar = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    //for OF array
    for ( let char of str ) {
        charMap[char] ? charMap[char]++ : charMap[char] = 1;
    }
    // for IN object
    for ( let char in charMap ) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
        return maxChar;
    }
}
module.exports = maxChar;