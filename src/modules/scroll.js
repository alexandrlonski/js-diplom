
  const scroll = () => {
  const anchors = document.querySelectorAll('.top-menu a[href*="#"], #totop '),
        toTop = document.getElementById('totop'),
        topMenu = document.querySelector('.top-menu'),
        header = document.querySelector('.header-main');
     for (let anchor of anchors) {
       anchor.addEventListener('click', function (elem) {
         elem.preventDefault();
         const blockID = anchor.getAttribute('href').substr(1);
         document.getElementById(blockID).scrollIntoView({
           behavior: 'smooth',
           block: 'start'
         });
       });
  };
  
 const html = document.documentElement,
        body = document.body;
window.addEventListener('scroll', function() {
   let scrollTop = html.scrollTop || body && body.scrollTop || 0;
      scrollTop -= html.clientTop;
      const rowOnscroll = () => {
   if (scrollTop < header.offsetHeight) { 
          toTop.style.display = 'none';
   } 
   else if(scrollTop >= header.offsetHeight){
     toTop.style.display = 'block';
   }
  };
const topMenuOnscroll = () => {
    
 if(screen.width <= 768){
   if (scrollTop >= 170) { 
           topMenu.classList.add('fixed'); 
           topMenu.classList.remove('static');
  } else if(scrollTop < 170){ 
           topMenu.classList.add('static'); 
           topMenu.classList.remove('fixed'); 
        };
      };
  }; 

    rowOnscroll();
    topMenuOnscroll();
});


;

 
     
       
};

export default scroll;