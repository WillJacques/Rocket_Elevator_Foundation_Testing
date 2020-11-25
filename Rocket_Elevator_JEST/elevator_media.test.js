const getContent = require ('./modules/ElevatorMedia');

test('return address', () => {
    expect(getContent()).toEqual(expect.any(String))
})