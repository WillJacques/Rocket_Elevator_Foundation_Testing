const jquery = require('jquery');

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
    getcontent3() {
        // var funfact = ""
        // jQuery.getJSON('https://api.chucknorris.io/jokes/random', function(data) {
        // console.log("----")
        // console.log(data)
        // console.log("----")
        // console.log(data.value)
        // console.log("----")
        // });
        // async function load() {
        //     let url = 'https://api.chucknorris.io/jokes/random';
        //     let obj = await (await fetch(url)).json();
        //     console.log(obj);
        // }
        // load();
        // $.getJSON('https://api.chucknorris.io/jokes/random', function(data) {
        // var text = `Data: ${data.value}`
        // console.log(text)
        // });
        jquery.ajax({
            method: "GET",
            url: "https://api.chucknorris.io/jokes/random",
            dataType: "json",
            data: {}
          }).done(json => console.log(json.value));
    }
}

module.exports = Streamer;

