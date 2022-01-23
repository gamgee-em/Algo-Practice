const sumOfTwo = require('./index');

test('sumOfTwo() is a function', () => {
    expect(typeof sumOfTwo).toEqual('function');
});

test('sumOfTwo(5, -2) is equal to 12', () => {
    expect(sumOfTwo(5, -2)).toEqual(12);
}); 

test('sumOfTwo(10, -20) is equal to -155', () => {
    expect(sumOfTwo(10, -20)).toEqual(-155);
}); 