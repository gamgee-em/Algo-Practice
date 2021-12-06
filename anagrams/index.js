// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//* Solution 1 | compare all chars
/* const anagrams = (stringA, stringB) => {

    return stringA.split('').sort().join('').toLowerCase() === stringB.split('').sort().join('').toLowerCase();

}; */

//* Solution 2 | do not compare whitespace or special chars
/* const anagrams = (stringA, stringB) => {

    const regex = /[^\w]/g;

    return stringA.replace(regex, '').split('').sort().join('').toLowerCase() === stringB.replace(regex, '').split('').sort().join('').toLowerCase();

} */

//* Solution 3 | compare all chars w/ helper function
const anagrams = (stringA, stringB) => {
    return cleanStr(stringA) === cleanStr(stringB);
}

const cleanStr = (str) => {
    return str.split('').sort().join('').toLowerCase();
};

//* Solution 4 | char map
/* const anagrams = (stringA, stringB) => {

    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);
    
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    };

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char] && charMapB[char] !== charMapA[char]) {
            return false;
        };
    };
    return true;
};

const buildCharMap = (str) => {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    };
    return charMap;
}; */



module.exports = anagrams;
