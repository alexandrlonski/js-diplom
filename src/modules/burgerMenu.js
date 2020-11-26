const burgerMenu = () => {
  const 
        menuBtn = document.querySelector('.menu-button img'),
        popupMenu = document.querySelector('.popup-menu'),
        navDesktop = document.querySelector('.hidden-large'),
        navMobile = document.querySelector('.hidden-small'),
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
          `;
        document.head.appendChild(style);
        
     
  if(screen.width <= 768){
    navDesktop.style.display ='block';
    navMobile.style.display ='none';
    
    
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