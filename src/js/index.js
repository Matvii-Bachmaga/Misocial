setBurger("header");
setBurger("footer");

function setBurger (container){
  let temp = document.querySelector(container),
      burger = temp.querySelector('.menu-line__burger'),
      menu = temp.querySelector('.menu-line__menu');

  burger.onclick = function (){
    menu.classList.toggle('menu-line__menu_active');
  }
} 