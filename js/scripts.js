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

  $(".ownInfo").submit(function() {
    event.preventDefault();

    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();

    $(".firstName").text(name1);
    $(".lastName").text(name2);

    var learn = $("input:radio[name=learn]:checked").val();

        if (learn === "ready"){
          course = 'C#, Php, and Java.'
        } else if ( learn === "no") {
          course = "Css, Design, and Ruby."
        } else {
          course = "something else."
        }

    $("#course").empty().append(course);
    $(".panel").show();
  });

});
