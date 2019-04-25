
function checkPass(){
var adm = document.getElementById("passAdmin").value;
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
}
// if(adm != "admin"){
//   alert("Not equal");
// }else if(adm=="admin"){
// window.open("../Html_files/admin.html","_self"); 
// }else if(adm == "client"){
// window.open("../Html_files/User_Story.html","_self");
// }else{
//   alert("your password is not correct");
// }

