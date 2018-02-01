$(function(){
     
$("#getBtn").click(logValidation);
    
function logValidation(){
    
    var error=false;
    var log=$("#user_name").val();
    var pass=$("#pass").val();
    
    if(log.trim().length<2 || log=="") {
            $("#err").html("INVALID INPUT");
            error=true;
       }
        
       
    if(pass.trim().length<2 || pass=="") {
            $("#err").html("INVALID INPUT");
            error=true;
        }
    console.log("OK");
    
    if(error==false)
    {
      reset();  
        
    }
  console.log($("#err").html("a"));
}
    
function reset(){
    $("#user_name").val("");
    $("#pass").val("");
    $("#err").val("");
}
    
$("#user_name").keyup(function() {
     var log=$("#user_name").val();
     if(log.trim().length>0){
       $("#err").html("");
    }
});

$("#pass").keyup(function() {
     var pass=$("#pass").val();
     if(pass.trim().length>0){
       $("#err").html("");
     }    
});
    
    
});