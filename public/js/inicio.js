$(document).ready(function(){
const diverror = document.getElementById('diverror')
$("#boton").click(function() {
  var num=$("input#txtNum").val();
  if(num=="" || isNaN(num)){
  $("#divrespuesta").html("");
  $("#diverror").show("slow");
  $("#diverror").html("<img src=\"img/ojo.png\"/><b> ¡¡ Datos Incorrectos !! </b><img src=\"img/ojo.png\"/>");
  }//if
  else{
    $("#diverror").html("");
    document.getElementById("f1").submit();
  }//else
});//click
});//ready
