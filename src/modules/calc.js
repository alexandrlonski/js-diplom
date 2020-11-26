

 const calc = (prise = 45) => {
		const cardTypes = document.querySelectorAll('[name=card-type]'),
					cardOrder = document.getElementById('card_order'),
					totalValue = document.getElementById('price-total'),
					inputPromo = document.querySelector('[placeholder=Промокод]');
					console.log(inputPromo.textContent );
	  let sum = 0,
			  total = 0;
	  function MyCeil10(val) {
      return Math.ceil(val / 10) * 10;
    };		
		const iterateValue = () => {
			const requestId = requestAnimationFrame(iterateValue);
			if (sum < Math.floor(total)) {
				sum += 5;
				totalValue.textContent = sum + 'руб.';
			} else if  (sum > Math.floor(total)) {
				sum -= 5;
				totalValue.textContent = sum + 'руб.';
			} else {
				cancelAnimationFrame(requestId);
			}
		};			
		
		
		cardOrder.addEventListener('input', () => {
			cardTypes.forEach((elem) => {
			if(elem.checked && inputPromo.value === '' ){
				total = prise * elem.value;
       console.log(inputPromo.value);
			} 	else if(elem.checked && inputPromo.value === 'ТЕЛО2019'){
        total = MyCeil10((prise * elem.value) - (((prise * elem.value) / 100) * 30));
			}

      iterateValue();
		});
		})
	};

export default calc;