const sum = require('./index');

  test('sum is a function', () => {
    expect(typeof sum).toEqual('function');
  });

  test('sum(3) equals 6', () => {
    expect(sum(3)).toEqual(6);
  });