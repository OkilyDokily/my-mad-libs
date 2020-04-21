

$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    var categories = ["animal","celebrity","location","food"];
    categories.forEach(function(category){
      var answer  = $("#"+ category).val();
      $("." + category).text(answer);
    }) 
    

    // var animal = $("#animal").val();
    // var celebrity = $("#celebrity").val();
    // var location = $("#location").val();
    // var food = $("#food").val();

    // $(".animal").text(animal);
    // $(".celebrity").text(celebrity);
    // $(".location").text(location);
    // $(".food").text(food);
    $("#story").show();
  
  });
});