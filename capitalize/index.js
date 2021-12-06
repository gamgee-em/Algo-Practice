// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//* Solution 1
/* const capitalize = (str) => {
    const strArr = str.split(' ');
    const capArr = [];
    
    strArr.forEach((char, i) => {
        capArr.push(char[0].toUpperCase() + char.slice(1));
    });
    return capArr.join(' '); 
}; */

//* Solution 2
const capitalize = (str) => {
    const strArr = str.split(' ');
    const capArr = [];
    
    for(let char of strArr) {
        capArr.push(char[0].toUpperCase() + char.slice(1));
    };
    return capArr.join(' '); 
};

module.exports = capitalize;
