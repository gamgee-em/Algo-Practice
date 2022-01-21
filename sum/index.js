// --- Directions
// Create a function that takes an integer and sums the total
// sum(3) --> 6
// sum(5) --> 15


//* iterative solution
//* linear solution O(n) where (n) directly effects runtime 
 const sum = (num, result = 0) => {
    for (let i = 0; i <= num; i++) {
        result += i;
    };
    return result;
}; 


//* constant solution O(1) where the input has no effect on runtime
/* const sum = num => {
    return (num / 2) * (num + 1)
}; */

console.log(sum(5));