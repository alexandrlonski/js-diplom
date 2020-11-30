const sliderCarusel = () => {
 
      const servicesSlider = document.querySelector('.services-slider'),
        sliderWrapper = document.querySelector('#services .wrapper'), 
        slides = servicesSlider.querySelectorAll('.slide'),
        btnPrev = sliderWrapper.querySelector('.prev'),
        btnNext = sliderWrapper.querySelector('.next');
        
      let position = 0,
          slideToShow = 5,
          widthSlide = Math.floor(100 / slideToShow),
          infinity = true;
        // добавляем стили
      sliderWrapper.style.overflow = 'hidden';
      servicesSlider.style.justifyContent = 'space-between';
      servicesSlider.style.padding = '0';
      servicesSlider.style.transition = 'transform 0.5s';
      servicesSlider.style.willChange = 'transform';
      sliderWrapper.style.position = 'relative';
      sliderWrapper.style.padding = '0 8px';
      infinity = true;
        
        if(screen.width <= 1200 && screen.width > 991){
          slideToShow = 4;
          widthSlide = Math.floor(100 / slideToShow);
        } else if(screen.width <= 991 && screen.width > 676 ) {
          slideToShow = 3;
          widthSlide = Math.floor(100 / slideToShow);
        } else if(screen.width <= 676) {
          slideToShow = 2;
          widthSlide = Math.floor(100 / slideToShow);
        }

        slides.forEach((item) => {
          item.style.flex = `0 0 ${widthSlide}%`;
          item.style.margin = '0';
        });
        
        btnPrev.addEventListener('click', () => {
          if(infinity || position > 0){
            --position;
            if(position < 0){
              position = slides.length - slideToShow;
            }
            servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
          }

        } );
        btnNext.addEventListener('click', () => {
          if(infinity || position < slides.length - slideToShow){
          ++position;
            if(position > slides.length - slideToShow){
               position = 0;
             }
          servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
          }
        });

};


export default sliderCarusel ;
