let button = document.querySelector('#nav-button');
button.addEventListener('click', toggleNav);

function toggleNav() {
    let nav = document.querySelector('#nav-list');
    nav.classList.toggle('open');
}