'use strict';
function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('show', visible),
        document.querySelector('.sidebar-mobile').classList.toggle('show', visible)
}

document.querySelector('.toggle').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});