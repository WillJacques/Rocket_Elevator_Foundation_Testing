const Streamer = require ('./modules/ElevatorMedia');

test('return color', () => {
    let subaru = new Streamer( 'Subaru', 'Outback', 2005, 'Grey' );
    expect(subaru.color).toBe('Grey');
    subaru.getContent('Red');
    expect(subaru.color).toBe('Red');
})