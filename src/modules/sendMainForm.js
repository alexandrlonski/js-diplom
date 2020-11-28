const sendMainForm = () => {
   const allMainForm = document.querySelectorAll('.popup form, #banner-form, #card_order, #footer_form'),
         inputsPhone = document.querySelectorAll('[name=phone]'),
         inputsName = document.querySelectorAll('[name=name]'),
         popupThanks = document.getElementById('thanks'),
         totalValue = document.getElementById('price-total'),
         popupThanksHcontent = document.querySelector('#thanks .form-content h4'),
         popupThanksPcontent = document.querySelector('#thanks .form-content p'),
         statusMessage = document.createElement('div'),
         popup = document.querySelector('.popup');

    const applyStyle = () => {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = `
      .sk-wave {
        width: 6em;
        height: 4em;
        margin: auto;
        text-align: center;
        font-size: 1em;
      }
      
      .sk-wave .sk-rect {
        background-color: #ffd11a;
        height: 100%;
        width: .5em;
        display: inline-block;
        -webkit-animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
        animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
      }
      
      .sk-wave .sk-rect-1 {
        -webkit-animation-delay: -1.2s;
        animation-delay: -1.2s;
      }
      
      .sk-wave .sk-rect-2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      
      .sk-wave .sk-rect-3 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
      
      .sk-wave .sk-rect-4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      
      .sk-wave .sk-rect-5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
      
      @-webkit-keyframes sk-wave-stretch-delay {
      
        0%,
        40%,
        100% {
          -webkit-transform: scaleY(0.4);
          transform: scaleY(0.4);
        }
      
        20% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
      
      @keyframes sk-wave-stretch-delay {
      
        0%,
        40%,
        100% {
          -webkit-transform: scaleY(0.4);
          transform: scaleY(0.4);
        }
      
        20% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
    `;
    document.head.appendChild(style);
  };
  
         inputsName.forEach((elem) => {
             elem.addEventListener('input', () => {
               elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
               });
             });

         inputsPhone.forEach((elem) => {
             elem.addEventListener('input', () => {
               elem.value = elem.value.replace(/[^0-9+]/ig, '').substring(0,13);
              
               });
             });
  
         allMainForm.forEach((form) => {
            const inputs = form.querySelectorAll('[name=phone], [name=name], [name=promo] '),
                  inputPhone = form.querySelector('[name=phone]'),
                  inputName = form.querySelector('[name=name]');
                  
            let input;
                  const checkBox = form.querySelector('.personal-data [type=checkbox]');
                  if(checkBox){
                     checkBox.required = false;
                  }
            popup.addEventListener('click', (e) => {
               if(e.target.closest('.overlay') || e.target.closest('.close_icon') || e.target.closest('.close-btn')) {
                   inputPhone.value = '';
                   inputName.value = '';
               }
            }); 
            form.addEventListener('submit', (e) => {
            e.preventDefault();
            
              if(!inputPhone.value.match(/^[\+]?[0-9]{7,13}$/ig)) {
                   inputPhone.style.border = ("1px solid red");
                   alert('Номер введен не верно');
                   return;
              
               } else {
                 (inputPhone) ? inputPhone.style.border = ("1px solid #b7b7b7"): "";
                 (inputName) ?  inputName.style.border = ("1px solid #b7b7b7"): "" ;     
                 }
         
               if(checkBox){
                  if (!checkBox.checked) { 
                   alert("Дайте своё согласие");
                   return;
                   }
               }
              
            form.appendChild(statusMessage);
            statusMessage.innerHTML = `<div class='sk-wave'>
                                         <div class='sk-rect sk-rect-1'></div>
                                         <div class='sk-rect sk-rect-2'></div>
                                         <div class='sk-rect sk-rect-3'></div>
                                         <div class='sk-rect sk-rect-4'></div>
                                         <div class='sk-rect sk-rect-5'></div>
                                       </div>`;
            applyStyle(); 
                          
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
              body[key] = val;
            });
            postData(body)
            .then((response) => {
              if(response.status !== 200) {
                 throw new Error('status network not 200');
              }
              popupThanksHcontent.textContent = 'Спасибо!'
              popupThanksPcontent.textContent = `Ваша заявка отправлена.
                                                  Мы свяжемся с вами в ближайшее время. `
              popupThanks.classList.add('active');
              
              statusMessage.textContent = '';
            })
            .catch((error) => {
               setTimeout(() => {
              popupThanks.classList.add('active');
              
              statusMessage.textContent = '';
              popupThanksHcontent.textContent = 'Ошибка!'
              popupThanksPcontent.textContent = 'Произошла ошибка отправки данных!'
               console.error(error);
                 } , 3000);

            });
            setTimeout(() => { 
              statusMessage.textContent = '';
              if(checkBox){
              checkBox.checked = false;
              }
               inputs.forEach((elem) => {
                 elem.value = '';
               });
              } , 5000);

            });
         });

        const postData = (body) => {
          return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          } ,     
          body: JSON.stringify(body),
          });    
        }       
};

export default sendMainForm;