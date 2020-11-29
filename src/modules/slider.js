const slider = () => {

  const slide = document.querySelectorAll('.main-slider .slide'),
        slider = document.querySelector('.head-slider');
   
    let currentSlide = 0,
        Interval;
    const prevSlide = (elem, index, display) => {
        elem[index].style.display = display;
    };
    const nextSlide = (elem, index, display) => {
        elem[index].style.display = display;
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'none');
      currentSlide++;
      if( currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'flex');
    };      
    const startSlide = (time = 2500) => {
         Interval = setInterval(autoPlaySlide, time);
    }; 
        
    const stopSlide = () => {
       clearInterval(Interval);
    }; 
 
    slider.addEventListener('mouseover', (event) => {
           if(event.target.closest('.slide-text')) {
            stopSlide();
          }
    });
    slider.addEventListener('mouseout', (event) => {
          if(event.target.closest('.slide-text')) {
            startSlide();
          }
    });
    startSlide();
    
};

export default slider;