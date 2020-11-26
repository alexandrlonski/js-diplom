
 const clubSelect = () => {
  const listClubs = document.querySelector('.club-select ul'),
        style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = `
          .active {
            display: block !important;
            z-index: 7005 !important;
          }`; 
        document.head.appendChild(style);
  document.addEventListener('click', (e) => {
    if(e.target.closest('.club-select p')){
      listClubs.classList.toggle('active');  
    } else if(!e.target.closest('.active') ){
       listClubs.classList.remove('active');
    } 
  });
};

export default clubSelect;