

 const calc = () => {
		const cardTypes = document.querySelectorAll('[name=card-type]'),
					cardOrder = document.getElementById('card_order'),
					totalValue = document.getElementById('price-total'),
					inputPromo = document.querySelector('[placeholder=Промокод]');			
		let total;
		const price = () => {
				
       	
		}
		cardOrder.addEventListener('click', () => {
			cardTypes.forEach((elem) => {
			if (elem.checked)	{
		if(elem.value === '1') {
					if(inputPromo.value === 'ТЕЛО2019'){
						return total = Math.ceil(1999 - ((1999 / 100) * 30)) ;
					}
				 return total = 1999;
				}else if(elem.value === '6'){
					if(inputPromo.value === 'ТЕЛО2019'){
						return total = 9900 - ((9900 / 100) * 30);
					}
				 return total = 9900;
			  } else if(elem.value === '9'){
					if(inputPromo.value === 'ТЕЛО2019'){
						return total = 13900 - ((13900 / 100) * 30);
					}
				 return total = 13900;
				} else if(elem.value === '12'){
					if(inputPromo.value === 'ТЕЛО2019'){
						return totalValue.textContent = 19900 - ((19900 / 100) * 30);
					}
				 return totalValue.textContent = 19900;
			  } 
		}	
       totalValue.textContent = total;

		});
		})
	};

export default calc;