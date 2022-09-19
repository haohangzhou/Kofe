//animate subtitle onload
const banner_subtitles = document.querySelectorAll('.banner_subtitle');

window.addEventListener('load', () => {
	banner_subtitles.forEach((item) => {
		fadeInAnimation(item);
	});
});

function fadeInAnimation(element) {
	element.classList.remove('transparent');
}

// toggle nav on mobile view

const headerBtns = document.querySelectorAll('.header_button');

headerBtns.forEach((button) => {
	button.addEventListener('click', () => {
		toggleNav();
	});
});

function toggleNav() {
	const nav = document.querySelector('nav');
	nav.classList.toggle('slide_down');
}
