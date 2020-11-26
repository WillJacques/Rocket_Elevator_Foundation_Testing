const jquery = require('jquery');
const fetch = require('node-fetch');

require ('../node_modules/jquery/dist/jquery')

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
    getcontent2() {
        var fact = "Chuck Norris for president !";
        return fact
    }
    async getcontent3() {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await response.json();
        console.log(json.value);
        return json.value;
    }
}

module.exports = Streamer;

