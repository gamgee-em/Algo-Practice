const sumArr = require('./index');

test('sumArr() is a function', () => {
    expect(typeof sumArr).toEqual('function')
});

test('sumArr([1, 2, 3] equals 6)', () => {
    expect(sumArr([1, 2, 3])).toEqual(6);
});

test('sumArr([5, 10, 15] equals 36)', () => {
    expect(sumArr([5, 10, 15, 6])).toEqual(36);
});