// window.addEventListener('scroll', function() {
//   const navbar = document.querySelector('#main-nav');
//   navbar.classList.toggle('sticky', window.scrollY > 0);
// });

// window.addEventListener('scroll', function() {
//   const nav = document.getElementById('main-nav');
//   if (window.scrollY > 0) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// }); 

window.addEventListener('scroll', function() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});

// script.js

const toggleButton = document.getElementById('toggle-btn');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('light-mode');
}); 
