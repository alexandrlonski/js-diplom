const sendPopupForm = () => {
   const errorMessage = 'Что то пошло не так',
         successMessage = 'Спасибо! Мы скоро с вами свяжемся!', 
         allpopupForm = document.querySelectorAll('.popup form'),
         inputsPhone = document.querySelectorAll('[name=phone]'),
         inputsName = document.querySelectorAll('[name=name]'),
         statusMessage = document.createElement('div');

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
        background-color: #337ab7;
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
  
         allpopupForm.forEach((form) => {
            const inputs = form.querySelectorAll('input');
                  const checkBox = form.querySelector('[type=checkbox]');
                  if(checkBox){
                     checkBox.required = false;
                  }

            form.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputPhone = form.querySelector('[name=phone]'),
                  inputName = form.querySelector('[name=name]'),
                  inputsForm = form.querySelectorAll('input');
            let input;
            
            inputsForm.forEach((item) =>{
              if(item.value === ''){
                 return input = '';
              }
            }) 
              if(!inputPhone.value.match(/^[\+]?[0-9]{7,13}$/ig)) {
                   inputPhone.style.border = ("1px solid red");
                   alert('Номер введен не верно');
                   return;
              
               } else {
                 inputPhone.style.border = ("none");
                 inputName.style.border = ("none");

               }
               if (!checkBox.checked) { 
                   alert("Дайте своё согласие");
                   return;
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
              statusMessage.style.cssText = 'font-size: 1rem; color: #19b5fe;';
               statusMessage.textContent = successMessage;
               inputs.forEach((elem) => {
                 elem.value = '';
               });
            })
            .catch((error) => {
              
              statusMessage.style.cssText = 'font-size: 2rem; color: red; margin-top: 30%';
               statusMessage.textContent = errorMessage;
              
               console.error(error);
            });
            
             const inputsBlock = form.querySelectorAll('p, button');
              setTimeout(() => { 
             
                  inputsBlock.forEach((elem) => {
                        elem.style.display = 'none';
                  });
              } , 3000);
              setTimeout(() => { 
              statusMessage.textContent = '';
              checkBox.checked = false;
               inputs.forEach((elem) => {
                 elem.value = '';
               });
              } , 5000);

            const popups = document.querySelectorAll('.popup');
            setTimeout(() => {
               popups.forEach((elem) => {elem.classList.remove('active')})} , 6000);
           
            
            setTimeout(() => {
               inputsBlock.forEach((elem) => {
                        elem.style.display = 'block';
                  })} , 7000);
           
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

export default sendPopupForm;