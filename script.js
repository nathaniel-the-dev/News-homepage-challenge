const menu = document.getElementById('mobile-menu');
const btnOpen = document.getElementById('btn-menu-open');
const btnClose = document.getElementById('btn-menu-close');

function toggleMenu() {
	menu.ariaHidden = !JSON.parse(menu.ariaHidden);
}

btnOpen.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
menu.addEventListener('click', function (ev) {
	if (!ev.target.closest('nav') || ev.target.tagName === 'A') toggleMenu();
});
