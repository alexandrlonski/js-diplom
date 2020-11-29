

 const calc = () => {
		const cardTypes = document.querySelectorAll('.time [name=card-type]'),
					cardOrder = document.getElementById('card_order'),
					totalValue = document.getElementById('price-total'),
					mozaika = document.getElementById('card_leto_mozaika'),
					schelkovo = document.getElementById('card_leto_schelkovo'),
					inputPromo = document.querySelector('[placeholder=Промокод]'),
					cardsTypes = cardOrder.querySelector('.cards-types');
					
		let total;

		cardOrder.addEventListener('input', () => {
			console.log();
			if(cardsTypes){
				return
			}
			if(mozaika.checked) {
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
			} else if(schelkovo.checked) {
         cardTypes.forEach((elem) => {
			    if (elem.checked)	{
		        if(elem.value === '1') {
					    if(inputPromo.value === 'ТЕЛО2019'){
						     return total = Math.ceil(2999 - ((2999 / 100) * 30)) ;
					      }
				         return total = 2999;
				    }else if(elem.value === '6'){
					    if(inputPromo.value === 'ТЕЛО2019'){
						     return total = 14990 - ((14990 / 100) * 30);
					      }
				         return total = 14990;
			      } else if(elem.value === '9'){
					    if(inputPromo.value === 'ТЕЛО2019'){
						     return total = 21990 - ((21990 / 100) * 30);
					      }
				         return total = 21990;
				    } else if(elem.value === '12'){
					    if(inputPromo.value === 'ТЕЛО2019'){
						     return totalValue.textContent = 24990 - ((24990 / 100) * 30);
					      }
				         return totalValue.textContent = 24990;
			      }  
		      }	
          totalValue.textContent = total;
		    });
			}	
		})
	};

export default calc;