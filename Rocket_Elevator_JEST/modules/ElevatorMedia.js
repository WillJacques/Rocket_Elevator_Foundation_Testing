class Streamer{
    constructor(address, floors = 1) {
        this.address = address;
        this.floors = floors;
    }
}
  // Instantiate the class
let myHouse = new Streamer( '1100 Fake St., San Francisco CA, USA', 2);
    
function getContent(){
        return myHouse.address
    }

module.exports = getContent;