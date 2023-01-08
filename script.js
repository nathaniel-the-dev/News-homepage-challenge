const menu = document.getElementById('mobile-menu');
const btnOpen = document.getElementById('btn-menu-open');
const btnClose = document.getElementById('btn-menu-close');

function toggleMenu(hide) {
	menu.ariaHidden = hide !== undefined ? hide : !JSON.parse(menu.ariaHidden);
}

btnOpen.addEventListener('click', toggleMenu.bind(this, false));
btnClose.addEventListener('click', toggleMenu.bind(this, true));
menu.addEventListener('click', function (ev) {
	if (!ev.target.closest('nav') || ev.target.tagName === 'A') toggleMenu(true);
});
