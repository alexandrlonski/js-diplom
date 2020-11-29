const sliderCarusel = () => {
 
      const servicesSlider = document.querySelector('.services-slider'),
        sliderWrapper = document.querySelector('#services .wrapper'), 
        slide = servicesSlider.querySelectorAll('.slide'),
        btnPrev = servicesSlider.querySelector('.prev'),
        btnNext = servicesSlider.querySelector('.next');

        servicesSlider.style.overflow = 'auto';
        servicesSlider.style.paddingLeft = '10px';
        
        sliderWrapper.style.position = 'relative';
        sliderWrapper.style.maxWidth = '1140px';
        
    let offset = 1115;

    slide[0].style.transition = '0.5s all';
    servicesSlider.style.overflow = 'hidden';
    slide.forEach(item =>{
        item.style.minWidth = '210px';
    });
    slide[0].style.marginLeft = `-${offset}px`;
    btnNext.addEventListener('click', () => {
        offset += 224;
        if(offset > 1110){
            offset = 0;
        }
        slide[0].style.marginLeft = `-${offset}px`;
    });
    btnPrev.addEventListener('click', () => {
        offset -= 224;
        if(offset <= 0){
            offset = 1110;
        }
        slide[0].style.marginLeft = `-${offset}px`;
    });     

};


export default sliderCarusel ;
