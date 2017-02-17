$(function(){

  $(".ownInfo").submit(function() {
    event.preventDefault();

    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();

    $(".firstName").text(name1);
    $(".lastName").text(name2);
debugger;
    // function add(option1, option2, option3, option5)
    //       option1 + option2 + option3 + option5;

    // var result = add(option1, option2, option3, option5).val();

    // var learn = $("input:radio[name=learn]:checked").val();
    var option1 = parseInt($(".option1").val());
    var option2 = parseInt($(".option2").val());
    var option3 = parseInt($(".option3").val());
    var option5 = parseInt($(".option5").val());



    if (result > 6){
      course = ("Css");
    } else if (result = 3){
      course = ("PHP");
    } else if (result = 5) {
      course = ("java")
    } else if (result < 5 && result > 1){
      course = ("ruby")
    } else (result = 0)
      course = ("something else!")
    });

    $("#course").text(result);

  });
