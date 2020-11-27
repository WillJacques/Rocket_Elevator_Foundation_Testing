const Streamer = require ('./modules/ElevatorMedia');

beforeEach(() => {
    fetch.resetMocks();
  });
  
test("return stub fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify({"categories": [],
        "created_at": "2020-01-05 13:42:21.795084",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "cKbLFZ8uS1WrpLxVly_CaA",
        "updated_at": "2020-01-05 13:42:21.795084",
        "url": "https://api.chucknorris.io/jokes/cKbLFZ8uS1WrpLxVly_CaA",
        "value": "Slenderman runs from Chuck Norris. Its also the reason why Slenderman has no eyes.....Chuck Norris roundhoused kicked his face."
    }));
  let chuckfacts = new Streamer()
  await expect(chuckfacts.getcontent()).resolves.toBe('<p>Slenderman runs from Chuck Norris. Its also the reason why Slenderman has no eyes.....Chuck Norris roundhoused kicked his face.</p>');
});

test('return color', () => {
    let mycar = new Streamer( 'Dodge', 'Grand Caravan', 2012, 'Grey' );
    expect(mycar.color).toBe('Grey');
    mycar.getContent3('Pink');
    expect(mycar.color).toBe('Pink');
})

test('return best president', () => {
    let myfacts = new Streamer()
    expect(myfacts.getcontent2()).toBe('Chuck Norris for president !');
})

// TEST TO SEE IF API RESPOND : Need to comment setupJest.js and line 3 to line 18 to make it work again...

// test('return something', async () => {
//     let chuckfacts = new Streamer()
//     await expect(chuckfacts.getcontent()).resolves.toEqual(expect.any(String));
// })
