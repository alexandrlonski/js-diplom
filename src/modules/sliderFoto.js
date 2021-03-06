const sliderFoto = () => {
   const gallery = document.querySelector('#gallery .gallery-slider'),
         sliders = document.querySelectorAll('#gallery .slide');
         
        //  gallery.style.height = '404px';
         gallery.style.position = 'relative';
        
    const addDots = () => {
      const portfolioDots = document.querySelector('.slide-dots');
      
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
       if(!target.matches('.dot, .slider-btn')){
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
           if(event.target.matches('.slider-btn') || 
          event.target.matches('.dot')) {
            stopSlide();
          }
    });
    gallery.addEventListener('mouseout', (event) => {
          if(event.target.matches('.slider-btn') || 
          event.target.matches('.dot')) {
            startSlide();
          }
    });
    startSlide();
   
};

export default sliderFoto;