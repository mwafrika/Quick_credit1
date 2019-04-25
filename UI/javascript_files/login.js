function checkPass(){
    var admi = document.getElementById("passAdmin");
    var client1 = "client";
    if(admi.isEqualNode(client1)){
    window.open("../Html_files/admin.html","_self"); 
    }else{
    
   alert("admin password not valid");   
    }
}
