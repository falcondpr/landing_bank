
const menu = document.querySelector('.navbar__menu');
const navbarButton = document.querySelector('#navbarButton');

navbarButton.addEventListener('click', () => {

   let htmlTimes = '<i class="fas fa-times fa-1x px-2"></i>';
   let htmlBars = '<i class="fas fa-bars fa-1x"></i>';

   if(navbarButton.innerHTML === htmlTimes) {
      navbarButton.innerHTML = htmlBars;
   } else {
      navbarButton.innerHTML = htmlTimes;
   }
   menu.classList.toggle('active');
});