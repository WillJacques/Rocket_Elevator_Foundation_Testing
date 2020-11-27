const fetch = require('node-fetch');

class Streamer {
    constructor( make, model, year, color ) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
    getContent3( color ) {
      this.color = color;
    }
    getcontent2() {
        var fact = "Chuck Norris for president !";
        return fact
    }
    async getcontent() {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await response.json();
        let html_response = "<p>"+json.value+"</p>"
        return html_response;
    }
}

module.exports = Streamer;

