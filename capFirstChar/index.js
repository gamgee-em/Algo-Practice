/* 
    Your task is to capitalize the first character of each word in the given string
*/

//! input --> output 
/* 
"How can mirrors be real if our eyes aren't real" -->
returns "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
 
const capFirstChar = str => {

    //split str into an array
    const capStr = str.split(' ');

    // map over each word in capString Array
    return capStr.map(word => {

        // capitalize the character at index 0 of word
        // then slice word at index 1 (remainder of string) and concatenate with capitalized char at index 0
        return word.charAt(0).toUpperCase() + word.slice(1);
        // finally join the array at each index with ' ' and return a string
    }).join(' ');

};
 
// one liner
//const capFirstChar = str => str.split(' ').map(char => char.charAt(0) + char.slice(1)).join(' ');

capFirstChar("How can mirrors be real if our eyes aren't real");

module.exports = capFirstChar;