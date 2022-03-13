const isValidWalk = require('./index');

test('isValidWalk() is a function', () => {
    expect(typeof isValidWalk).toEqual('function');
});

test('isValkedWalk([]) returns a Boolean', () => {
    expect(typeof isValidWalk([])).toEqual('boolean');
});

test("isValkedWalk(['n','s','n','s','n','s','n','s','n','s']) returns true", () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toEqual(true);
});