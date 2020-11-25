const Streamer = require ('./modules/ElevatorMedia');

test('return color', () => {
    let mycar = new Streamer( 'Dodge', 'Grand Caravan', 2012, 'Grey' );
    expect(mycar.color).toBe('Grey');
    mycar.getContent('Pink');
    expect(mycar.color).toBe('Pink');
})

test('return best president', () => {
    let myfacts = new Streamer()
    expect(myfacts.getcontent2()).toBe('Chuck Norris for president !');
})