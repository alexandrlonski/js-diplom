const burgerMenu = () => {
  const mobileMenu = document.querySelector('.hidden-ladge'),
        desctopMenu = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu');

  if(screen.width <= 768){
    document.onscroll = function() {
  const html = document.documentElement,
        body = document.body;

  let scrollTop = html.scrollTop || body && body.scrollTop || 0;
  scrollTop -= html.clientTop
  console.log(scrollTop);
  console.log(topMenu.offsetHeight);
  console.log(document.body.scrollTop);
  if (scrollTop >= 170) { // Если началась прокрутка, то...
    topMenu.classList.add('fixed'); // Добавляем класс со стилем со свойством position: fixed
    topMenu.classList.remove('static'); // Удаляем класс со стилем со свойством position: static
  } else { // Иначе...
    topMenu.classList.add('static'); // Добавляем класс со стилем со свойством position: fixed
    topMenu.classList.remove('fixed'); // Удаляем класс со стилем со свойством position: static
  };

  }
}

}

export default burgerMenu;