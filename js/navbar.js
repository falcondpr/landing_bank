
const menuMobile = document.querySelector('.mobile');
const navbarButton = document.querySelector('#navbarButton');

navbarButton.addEventListener('click', () => {

   let htmlTimes = '<i class="fas fa-times fa-1x"></i>';
   let htmlBars = '<i class="fas fa-bars fa-1x"></i>';

   if(navbarButton.innerHTML === htmlTimes) {
      navbarButton.innerHTML = htmlBars;
   } else {
      navbarButton.innerHTML = htmlTimes;
   }
   menuMobile.classList.toggle('active');
});