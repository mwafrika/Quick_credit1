
function checkPass(){
  var adm = document.getElementById("passAdmin").value;
  var user = document.getElementById("clients").value;
  switch (adm) {
    case "admin":
    window.open("../Html_files/admin.html","_self");
      break;
   case "client":
   window.open("../Html_files/User_Story.html","_self");
   break;
    default:
    alert("your password is not correct");
      break;
  }
  
  
  