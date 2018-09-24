$(document).ready(function(){

  $("#topForm").submit(function(){
        $("#topForm").html("</p> Awesome! We will get back to you soon!</p>");
        $(this).addClass("text-center");
  });

  $("#bottomForm").submit(function(){
        $("#bottomForm").html("</p> Awesome! We will get back to you soon!</p>");
        $(this).addClass("text-center");
  });

});

$('#topForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2122308/q26r5u/',
        type:'post',
        data:$('#topForm').serialize(),
        success:function(){

        }
    });
});

$('#bottomForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2122308/loefl0/',
        type:'post',
        data:$('#bottomForm').serialize(),
        success:function(){

        }
    });
});
