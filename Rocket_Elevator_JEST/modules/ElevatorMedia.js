class Streamer {
    constructor( make, model, year, color ) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
    getContent( color ) {
      this.color = color;
    }
}

module.exports = Streamer;