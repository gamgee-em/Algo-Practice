// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
    //create regex that matches characters aeiou case insensitive
    const regex = /[aeiou]/ig;

    let numOfVowels = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i].match(regex)) {
            numOfVowels++;
            console.log(numOfVowels);
        }
        
    };
    return numOfVowels;
};

module.exports = vowels;
