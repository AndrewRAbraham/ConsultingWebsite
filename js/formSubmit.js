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
