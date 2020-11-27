const popupForms = () => {
   const freeVisitForm = document.getElementById('free_visit_form'),
         callbackForm = document.getElementById('callback_form'),
         giftForm = document.getElementById('gift'),
         fixedGift = document.querySelector('.fixed-gift'),
         popupElems = document.querySelectorAll('.popup');
         

  document.addEventListener('click', (e) => {
    if(e.target.closest('.open-popup')){
    freeVisitForm.classList.add('active');
    } else if (e.target.closest('header .callback-btn')){
      callbackForm.classList.add('active');
    } else if (e.target.closest('.fixed-gift')){
      giftForm.classList.add('active');
      fixedGift.style.display = 'none'

    } else if(e.target.closest('.overlay') || e.target.closest('.close_icon') || e.target.closest('.close-btn')) {
      popupElems.forEach((elem) => {
        elem.classList.remove('active');
        // fixedGift.style.display = 'block';
      })
    }
  })
}

export default popupForms;