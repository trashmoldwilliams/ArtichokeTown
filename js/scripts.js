$(document).ready (function(){

  //Populate Grid
  for(var i = 0; i < 50; i++) {
    for(var j = 0; j < 70; j++) {
      $("#board").append("<div id='" + j + "-" + i + "' class='boardSquare empty'></div>")
    }
  }

  //Add Default Structures
  var addStructure = function(location, structure) {
    $("#" + location).removeClass();
    $("#" + location).addClass("boardSquare");
    $("#" + location).addClass(structure);
  }

  addStructure("33-23", "road");
  addStructure("33-24", "road");
  addStructure("33-25", "road");
  addStructure("33-26", "road");
  addStructure("34-26", "road");
  addStructure("35-26", "road");
  addStructure("36-26", "road");
  addStructure("36-25", "road");
  addStructure("36-24", "road");
  addStructure("36-23", "road");
  addStructure("35-23", "road");
  addStructure("34-23", "road");
  addStructure("30-23", "road");
  addStructure("30-24", "road");
  addStructure("30-25", "road");
  addStructure("30-26", "road");
  addStructure("31-26", "road");
  addStructure("32-26", "road");
  addStructure("32-23", "road");
  addStructure("31-23", "road");
  addStructure("37-26", "road");
  addStructure("38-26", "road");
  addStructure("39-26", "road");
  addStructure("39-25", "road");
  addStructure("39-24", "road");
  addStructure("39-23", "road");
  addStructure("38-23", "road");
  addStructure("37-23", "road");
  addStructure("33-27", "road");
  addStructure("33-28", "road");
  addStructure("33-29", "road");
  addStructure("34-29", "road");
  addStructure("35-29", "road");
  addStructure("36-29", "road");
  addStructure("36-28", "road");
  addStructure("36-27", "road");

  addStructure("34-24", "townHall");
  addStructure("35-24", "townHall");
  addStructure("34-25", "townHall");
  addStructure("35-25", "townHall");
  addStructure("31-24", "industrial");
  addStructure("32-24", "industrial");
  addStructure("31-25", "industrial");
  addStructure("32-25", "industrial");
  addStructure("34-27", "residential");
  addStructure("35-27", "residential");
  addStructure("34-28", "residential");
  addStructure("35-28", "residential");
  addStructure("37-24", "commercial");
  addStructure("38-24", "commercial");
  addStructure("37-25", "commercial");
  addStructure("38-25", "commercial");
  addStructure("34-20", "powerPlant");
  addStructure("35-20", "powerPlant");
  addStructure("34-21", "powerPlant");
  addStructure("35-21", "powerPlant");
  addStructure("34-22", "powerPlant");
  addStructure("35-22", "powerPlant");

})
