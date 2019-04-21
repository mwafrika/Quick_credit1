import '../css_files/loan_details.css';
import '../Html_files/main.css';

// (function ($) {
//     "use strict";
//     /*==================================================================
//     [ Focus input ]*/
//     $('.input100').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })
//     })
//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//    else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }

//     /*==================================================================
//     [ Show pass ]*/
//     var showPass = 0;
//     $('.btn-show-pass').on('click', function(){
//         if(showPass == 0) {
//             $(this).next('input').attr('type','text');
//             $(this).find('i').removeClass('fas fa-eye');
//             $(this).find('i').addClass('fa-eye-slash');
//             showPass = 1;
//         }
//         else {
//             $(this).next('input').attr('type','password');
//             $(this).find('i').addClass('fas fa-eye');
//             $(this).find('i').removeClass('fa-eye-slash');
//             showPass = 0;
//         }

//     });
    
// })(jQuery);

// 
document.querySelector('.open-nav').addEventListener('click', function(e){
    var sidebar = document.querySelector('#mySidenav');
    if(sidebar.getAttribute('data-state') === 'closed'){
        sidebar.setAttribute('data-state','opened');
        e.target.innerHTML = '&times;';
        openNav();
    }
    else{
        sidebar.setAttribute('data-state','closed');
        e.target.innerHTML = '&#9776;';
        closeNav();
    }
});
// function openDialog(){
//   window.open('loan_details.html','my window','height:300px;width:300px;top:400px;left:400px;');
// }
// window.onclick = function(event) {
//   if (event.target == main) {
//       modal.style.display = "none";
//   }
// }
// document.querySelector('.Details').addEventListener('click',function(){
// // var details = document.getElementById("main");
// // alert(details);
// window.onclick.querySelector('Details').addEventListener('click',function(e){
// var details = document.getElementById("main");
//  e.target=details;
// });


function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#fff";
  // document.getElementById("mySidenav").style.marginTop ="90px";
  document.getElementById("pictures").style.width ="50px";
  document.getElementById("pictures").style.height ="50px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
//   document.getElementById("mySidenav").style.marginTop ="250px";
}

function call_details(){
  var detail = document.getElementById("myMain");
}
