const sliderFoto = () => {
   const gallery = document.querySelector('#gallery .gallery-slider'),
         sliders = document.querySelectorAll('#gallery .slide');
         
        //  gallery.style.height = '400px';
         gallery.style.position = 'relative';
        //  sliders.forEach((elem) => {
        //    elem.style.position = "absolute";
        //    elem.style.left = "0";
        //    elem.style.opacity = "0";
        //    elem.style.transition = 'opacity .5s';
        //  })
    const addDots = () => {
      const portfolioDots = document.querySelector('.portfolio-dots');
      
      sliders.forEach((index) => {
        const doti = document.createElement('li');
              doti.className = 'dot';
              portfolioDots.appendChild(doti);
         
      });
       portfolioDots.firstElementChild.classList.add('dot-active'); 
    };
    addDots();
   
    const dot = document.querySelectorAll('.dot');
    let currentSlide = 0,
        Interval;
  const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
      prevSlide(sliders, currentSlide, 'slide-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if( currentSlide >= sliders.length){
        currentSlide = 0;
      }
      nextSlide(sliders, currentSlide, 'slide-active');
      nextSlide(dot, currentSlide, 'dot-active');
      
    };      
    const startSlide = (time = 2000) => {
         Interval = setInterval(autoPlaySlide, time);
    }; 
        
    const stopSlide = () => {
       clearInterval(Interval);
    }; 

    gallery.addEventListener('click', (event) => {
       event.preventDefault();
       let target = event.target;
       if(!target.matches('.dot, .portfolio-btn')){
         return;
       }
       prevSlide(sliders, currentSlide, 'slide-active');
       prevSlide(dot, currentSlide, 'dot-active');
       
       if( target.matches('#arrow-right') ){
         currentSlide++;
       } else if( target.matches('#arrow-left') ){
         currentSlide--;
       } else if( target.matches('.dot') ){
           dot.forEach((elem, index) => {
              if(elem === target){
                currentSlide = index;
              }
           });
       }
       if(currentSlide >= sliders.length){
         currentSlide = 0;
       }
       if(currentSlide < 0){
         currentSlide = sliders.length -1;
       }
       nextSlide(sliders, currentSlide, 'slide-active');
       nextSlide(dot, currentSlide, 'dot-active');
    });
    
    gallery.addEventListener('mouseover', (event) => {
           if(event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
            stopSlide();
          }
    });
    gallery.addEventListener('mouseout', (event) => {
          if(event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
            startSlide();
          }
    });
    startSlide();
   
};

export default sliderFoto;