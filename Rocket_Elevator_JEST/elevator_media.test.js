const sum = require ('./modules/sum');
const getContent = require ('./modules/ElevatorMedia');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('return hello world', () => {
    expect(getContent()).toEqual(expect.any(String))
})