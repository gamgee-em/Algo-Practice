// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//* Solution 1 | iterative
/* const vowels = (str) => {
    //create regex that matches characters aeiou case insensitive
    const regex = /[aeiou]/gi;

    let numOfVowels = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i].match(regex)) {
            numOfVowels++;
            console.log(numOfVowels);
        }

    };
    return numOfVowels;
}; */


//* Solution 2
/* const vowels = (str) => {
    // create regex that matches characters aeiou case insensitive
    const regex = /[aeiou]/gi;
    // create counter var to count # of vowels in each string
    let numOfVowels = 0;
    // split string into array to use for of loop
    let strArr = str.split('');
    // loop over each index of the strArr array
    for(let char of strArr) {
        // check if each index of strArr matches regex | if so increment numOfVowels by 1 | if not return current numOfVowels
        char.match(regex) ? numOfVowels++ : numOfVowels;
    };
    return numOfVowels;
}; */

//* Solution 3
const vowels = (str, counter = 0) => {
    str.split('').forEach(char => char.match(/[aeiou]/gi) ? counter++ : counter);
    return counter;
};

module.exports = vowels;
