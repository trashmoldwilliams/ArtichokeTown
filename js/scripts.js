$(document).ready (function(){

  //Populate Grid
  for(var i = 0; i < 50; i++) {
    for(var j = 0; j < 70; j++) {
      $("#board").append("<div id='" + j + "-" + i + "' class='boardSquare empty'></div>")
    }
  }

  //Create Town Object
  function Town() {
    this.control = 0;
    this.crime = 0;
    this.economy = 0;
    this.education = 0;
    this.electricity = 0;
    this.expenditures = 0;
    this.funds = 2000;
    this.health = 0;
    this.housing =  0;
    this.immigration = 0;
    this.jobs = 0;
    this.pollution = 0;
    this.population = 400;
    this.research = 0;
    this.revenue = 0;
    this.tax = 7;

    this.structures = [];
  }

  var town = new Town();


  //Add Default Structures
  function Structure(location, type) {
    this.type = type;
    this.location = location;
  }

  Town.prototype.addStructure = function(location, type) {
    $("#" + location).removeClass();
    $("#" + location).addClass("boardSquare");
    $("#" + location).addClass(type);

    var structure = new Structure(location, type);
    this.structures.push(structure);
  }

  town.addStructure("33-23", "road");
  town.addStructure("33-24", "road");
  town.addStructure("33-25", "road");
  town.addStructure("33-26", "road");
  town.addStructure("34-26", "road");
  town.addStructure("35-26", "road");
  town.addStructure("36-26", "road");
  town.addStructure("36-25", "road");
  town.addStructure("36-24", "road");
  town.addStructure("36-23", "road");
  town.addStructure("35-23", "road");
  town.addStructure("34-23", "road");
  town.addStructure("30-23", "road");
  town.addStructure("30-24", "road");
  town.addStructure("30-25", "road");
  town.addStructure("30-26", "road");
  town.addStructure("31-26", "road");
  town.addStructure("32-26", "road");
  town.addStructure("32-23", "road");
  town.addStructure("31-23", "road");
  town.addStructure("37-26", "road");
  town.addStructure("38-26", "road");
  town.addStructure("39-26", "road");
  town.addStructure("39-25", "road");
  town.addStructure("39-24", "road");
  town.addStructure("39-23", "road");
  town.addStructure("38-23", "road");
  town.addStructure("37-23", "road");
  town.addStructure("33-27", "road");
  town.addStructure("33-28", "road");
  town.addStructure("33-29", "road");
  town.addStructure("34-29", "road");
  town.addStructure("35-29", "road");
  town.addStructure("36-29", "road");
  town.addStructure("36-28", "road");
  town.addStructure("36-27", "road");

  town.addStructure("34-24", "townHall");
  town.addStructure("35-24", "townHall");
  town.addStructure("34-25", "townHall");
  town.addStructure("35-25", "townHall");
  town.addStructure("31-24", "industrial");
  town.addStructure("32-24", "industrial");
  town.addStructure("31-25", "industrial");
  town.addStructure("32-25", "industrial");
  town.addStructure("34-27", "residential");
  town.addStructure("35-27", "residential");
  town.addStructure("34-28", "residential");
  town.addStructure("35-28", "residential");
  town.addStructure("37-24", "commercial");
  town.addStructure("38-24", "commercial");
  town.addStructure("37-25", "commercial");
  town.addStructure("38-25", "commercial");
  town.addStructure("34-20", "powerPlant");
  town.addStructure("35-20", "powerPlant");
  town.addStructure("34-21", "powerPlant");
  town.addStructure("35-21", "powerPlant");
  town.addStructure("34-22", "powerPlant");
  town.addStructure("35-22", "powerPlant");

})
