$(function(){

  $(".ownInfo").submit(function() {
    event.preventDefault();

    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();

    $(".firstName").text(name1);
    $(".lastName").text(name2);

    var learn = $("input:radio[name=learn]:checked").val();

        if (learn === "ready"){
          course = 'Ruby, Php, and Java.'
        } else if ( learn === "no") {
          course = "Css, Design, and Java."
        } else {
          course = "something else."
        }
    $("#course").empty().append(course);

  });

});
