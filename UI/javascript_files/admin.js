document.querySelector('.open-nav').addEventListener('click',function(e){
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

