const capFirstChar = require('./index');

test('capFirstChar() is a function', () => {
    expect(typeof capFirstChar).toEqual('function');
});

test('How can mirrors be real if our eyes aren\'t real', () => {
    expect(capFirstChar('How can mirrors be real if our eyes aren\'t real'))
    .toEqual('How Can Mirrors Be Real If Our Eyes Aren\'t Real');
});