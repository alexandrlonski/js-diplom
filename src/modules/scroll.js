
  const scroll = () => {
  const anchors = document.querySelectorAll('.top-menu a[href*="#"], #totop '),
        toTop = document.getElementById('totop'),
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

  document.onscroll = function() {
  const html = document.documentElement,
        body = document.body;
  let scrollTop = html.scrollTop || body && body.scrollTop || 0;
      scrollTop -= html.clientTop;

   if (scrollTop < header.offsetHeight) { 
          toTop.style.display = 'none';
   } else if(scrollTop >= header.offsetHeight){
     toTop.style.display = 'block';
   }

  };      
        
};

export default scroll;