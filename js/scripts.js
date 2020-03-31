

$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    var animal = $("#animal").val();
    var celebrity = $("#celebrity").val();
    var location = $("#location").val();
    var food = $("#food").val();

    $(".animal").text(animal);
    $(".celebrity").text(celebrity);
    $(".location").text(location);
    $(".food").text(food);
    $("#story").show();
  
  });
});