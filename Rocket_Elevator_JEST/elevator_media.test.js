const Streamer = require ('./modules/ElevatorMedia');

test('return color', () => {
    let mycar = new Streamer( 'Dodge', 'Grand Caravan', 2012, 'Grey' );
    expect(mycar.color).toBe('Grey');
    mycar.getContent('Pink');
    expect(mycar.color).toBe('Pink');
})