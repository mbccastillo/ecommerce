element.getElementById('form1').onclick = function changeContent() {

    element.getElementById('form1').textContent = "Help me";
    element.getElementById('form1').style = "Color: red";
 
 }

  $(element).ready(function() {
    $("button").click(function() {
      $("form1").show();
    });
  });

  $("#button").click(function(){
    $("#form1").hide();
});