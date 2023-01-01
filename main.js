var button = document.getElementById('doomsday-button');
var body = document.querySelector('main');
var boo = document.getElementById('boo');
var flipButton = document.getElementById('see-original-site');
var main = document.querySelector('main');
var recap = document.getElementById('recap');

button.addEventListener('click', fuckItUp);
flipButton.addEventListener('click', seeOriginal);

function fuckItUp() {
    body.classList.toggle('hidden');
    boo.classList.toggle('hidden');
    button.innerText === 'WHY' ? button.innerText = 'Don\'t click this.' : button.innerText = 'WHY';
}

function seeOriginal() {
    main.classList.toggle('hidden');
    recap.classList.toggle('hidden');
    flipButton.innerText === 'Go back' ? flipButton.innerText = 'See original invite!' : flipButton.innerText = 'Go back';
}