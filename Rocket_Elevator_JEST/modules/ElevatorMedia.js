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
        var fact = "Chuck Norris for president !"
        return fact
    }
}

module.exports = Streamer;

// $.ajax({
//     url: "/building",
//     type: "GET",  
//     dataType: "json",
//     data: {customer: customer},
//     error: function (xhr, status, error) {
//         console.error('AJAX Error: ' + status + error);
//     },
//     success: function (response) {
//         console.log(response);
//         var buildings = response["buildings"];
//         $("#intervention_building_id").empty();

//         $("#intervention_building_id").append('<option value="">Select Building</option>');
//         for(var i = 0; i < buildings.length; i++){
//             $("#intervention_building_id").append('<option value="' + buildings[i]["id"] + '">' +buildings[i]["address_of_the_building"] + '</option>');
//         }
//     }
// });