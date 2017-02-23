var values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
var ten = 0;
var eleven = 0;
var twelve = 0;
var thirteen = 0;
var fourteen = 0;
var fifteen = 0;
var sixteen = 0;

var front;
var back;
var both = 2;
var none;
var answer;
var learn;
checkAnswers = function(answer) {
  for (i=0; i <= values.length; i++){
    if (values[i] === answer) {
      eval(answer + " = " + 1);
      console.log(checkAnswers);
    }
  }
}

$(function(){

  $(function() {

      function codeLeft() {
          $("#one").animate({left: "-=300"}, 1500, "swing", codeRight);
      }
      function codeRight() {
          $("#one").animate({left: "+=300"}, 1500, "swing", codeLeft);
      }

      codeRight();
  });

  $("form#code").submit(function(event) {
    event.preventDefault();

    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();

    $(".firstName").text(name1);
    $(".lastName").text(name2);



      $("input:checkbox[name=where]:checked").each(function(){
          checkAnswers($(this).val());
       });
      $("input:checkbox[name=how]:checked").each(function(){
          checkAnswers($(this).val());
       });
      $("input:checkbox[name=prefer]:checked").each(function(){
          checkAnswers($(this).val());
       });
      $("input:checkbox[name=practice]:checked").each(function(){
          checkAnswers($(this).val());
       });

      $("input:radio[name=learn]:checked").each(function(){


       });

     front = one+two+three+four;
     back = five+six+seven+eight;
     both = nine+ten+eleven;
     none = twelve+thirteen+fourteen+fifteen+sixteen;
     console.log(front);
     console.log(back);
     console.log(both);
     console.log(none);
        if (answer = front){
          course = "Css, Design, and Ruby!"
        } else if ( answer = back) {
          course = "C#, Php, and Java!"
        } else if (answer = both){
          course = "greatness in all you do!"
        } else if (anwser = none || learn === sixteen) {
          course   = "something different!"
        }
        var recommendations = ["front","back","both","none"];
        recommendations = recommendations.sort();
        for (i=0;i<=3;i++)

    $("#course").empty().append(course);
    $(".panel").show();
  });

});
