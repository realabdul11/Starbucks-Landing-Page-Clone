const button = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function onClick() {
  button.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

button.addEventListener('click', onClick);
