// toggle nav on mobile view
const toggleNav = () => {
	const nav = document.querySelector('nav');
	nav.classList.toggle('slide_down');
};

const headerBtns = document.querySelectorAll('.header_button');

headerBtns.forEach((button) => {
	button.addEventListener('click', () => {
		toggleNav();
	});
});
