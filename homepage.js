

// Declare Variable
let menu = document.getElementById('hide');

// Hamburger Menu Function
hammenu.addEventListener('click', ()=>{
     if (menu.style.display === 'none'){
        hammenu.classList.toggle("change");
        menu.style.display = 'block';
     }
     else{
        menu.style.display = 'none';
        hammenu.classList.remove("change");
     }
});
