// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//* iterative solution
//! linear runtime
const fib = n => {
    let fibArr = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = fibArr[fibArr.length - 1];
        const b = fibArr[fibArr.length - 2];
        fibArr.push(a + b);
    };
    return fibArr[n];
};

//* recursive solution
//! exponential runtime
/* const fib = n => {
    if (n < 2) {
        return n;
    };

    return fib(n - 1) + fib(n - 2);
}; */

//* recursive solution
//! one liner
// const fib = n => n < 2 ? n : fib( n - 1 ) + fib( n - 2 );

//* memoization store results of previous function calls
//! by caching previous function calls we speed up execution significantly
// pass in the function (fn) you want to speed up
/* const memoize = fn => {
    
    const cache = {};
    // use spread operator for flexibility
    return ((...args) => {

        if (cache[args]) return cache[args];

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;

    });
};

const fib = n => {
    
    if (n < 2) {
        return n;
    };

    return fib(n - 1) + fib(n - 2)

};

fib = memoize(fib); */

module.exports = fib;
