const equalSides = require('./index');

test('equalSides() is a function', () => {
    expect(typeof equalSides).toEqual('function');
});

test('equalSides([1, 2, 3, 4, 3, 2, 1] should equal 3)', () => {
    expect(equalSides([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
});
