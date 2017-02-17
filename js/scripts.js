$(function(){

  $(".ownInfo").submit(function(){
    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();

    $(".firstName").text(name1);
    $(".lastName").text(name2);

    var learn = $("input:radio[name=learn]:checked").val();
    var practice = $("#practice").val();
    var heavy = $("#heavy").val();
    var solve = $("#solve").val();
    var front = $("#front").val();

  });
});
