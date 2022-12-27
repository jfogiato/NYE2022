var button = document.getElementById('doomsday-button');
var body = document.querySelector('main');
var boo = document.getElementById('boo');

button.addEventListener('click', fuckItUp);

function fuckItUp() {
    body.classList.toggle('hidden');
    boo.classList.toggle('hidden');
    button.innerText === 'WHY' ? button.innerText = 'Don\'t click this.' : button.innerText = 'WHY';
}