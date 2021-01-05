const btn = document.getElementById('openNav');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', ()  => {
  navbar.classList.toggle('active')
})