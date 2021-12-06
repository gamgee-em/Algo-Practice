// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
    const numToStr = n.toString().split('').reverse().join('');
    // use Math.sign to return 1 or -1 to preserve postive or negitive int
    const strToNum = parseInt(numToStr) * Math.sign(n);

    return strToNum;
    //return n >= 0 ? strToNum : -strToNum;
    
}

reverseInt(-5);

module.exports = reverseInt;