const burgerMenu = document.querySelector('#burger_menu');
const menu = document.querySelector('#menu');


burgerMenu.addEventListener('click', () => {
    if(menu.classList.contains('hidden'))
    {
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }

});