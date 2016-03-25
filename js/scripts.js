$(document).ready (function(){
  var boardSize = 54;
  for(var i = 0; i < boardSize; i++) {
    for(var j = 0; j < boardSize; j++) {
      $("#board").append("<div x='" + i + "' y='" + j + "' class='boardSquare'></div>")
    }
  }
})
