const burgerMenu = () => {
  const topMenu = document.querySelector('.top-menu'),
        menuBtn = document.querySelector('.menu-button img'),
        popupMenu = document.querySelector('.popup-menu'),
        style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = `
          .flex {
            display: flex !important;
            z-index: 7005 !important;
          }
          .fixed {
            position: fixed;
          }
          .static {
            position: static;
          } 
          `
        document.head.appendChild(style);
        

  if(screen.width <= 768){
    document.onscroll = function() {
     const html = document.documentElement,
           body = document.body;
   
     let scrollTop = html.scrollTop || body && body.scrollTop || 0;
     scrollTop -= html.clientTop
   
         if (scrollTop >= 170) { // Если началась прокрутка, то...
           topMenu.classList.add('fixed'); // Добавляем класс со стилем со свойством position: fixed
           topMenu.classList.remove('static'); // Удаляем класс со стилем со свойством position: static
         } else { // Иначе...
           topMenu.classList.add('static'); // Добавляем класс со стилем со свойством position: fixed
           topMenu.classList.remove('fixed'); // Удаляем класс со стилем со свойством position: static
         };
     };
  };

  document.addEventListener('click', (e) => {
    if(e.target.closest('.menu-button img')) {
      popupMenu.classList.add('flex');
      } else if(e.target.closest('nav.popup-menu .close-menu-btn img') || e.target.closest('nav.popup-menu ul li a' )){
      popupMenu.classList.remove('flex');
      }
    });

};

export default burgerMenu;