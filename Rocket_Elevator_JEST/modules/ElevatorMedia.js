class Streamer{
    constructor(address, floors = 1) {
        this.address = address;
        this.floors = floors;
    }
}
  // Instantiate the class
let myHouse2 = new Streamer( '1102 Fake St., San Francisco CA, USA');
    
function getContent(){
        return myHouse2.address
    }

module.exports = getContent;