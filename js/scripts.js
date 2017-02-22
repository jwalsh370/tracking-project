var values = ["one", "two", "three", "four"];

var one = 0;
var two = 0;
var three = 0;
var four = 0;

var front;
var back;
var both;
var none;
var answer;

var checkAnswers = function(answer) {
  for (i=0; i < values.length; i++){
    if (values[i] === answer) {
      eval(answer + " = " + 1);
      console.log(values);
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
debugger;

        if (answer === front){
          course = 'C#, Php, and Java'
        } else if ( answer === back) {
          course = "Css, Design, and Ruby."
        } else if (answer === both){
          course = 'C#, Php, and Java, Css, Design, and Ruby'
        } else {
          course = "something different"
        }
        var front = one;
        var back = two;
        var both = three;
        var none = four;

    $("#course").empty().append(course);
    $(".panel").show();
  });

});
