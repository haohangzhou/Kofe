function fadeInAnimation(element) {
	element.classList.remove('transparent');
}

function toggleNav() {
	const nav = document.querySelector('nav');
	nav.classList.toggle('slide_down');
}

// toggle nav on mobile view
const headerBtns = document.querySelectorAll('.header_button');

headerBtns.forEach((button) => {
	button.addEventListener('click', () => {
		toggleNav();
	});
});

// fade in items when come in view
const fadeInWhileInView = (entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting && fadeInAnimation(entry.target);
	});
};

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.2, //trigger when 20% of the element is in view
};

const fadeInObserver = new IntersectionObserver(fadeInWhileInView, options);

const banner_subtitles = document.querySelectorAll('.banner_subtitle');
const section_texts = document.querySelectorAll('.section_text');
const section_images = document.querySelectorAll('.section_image');
const fadeInItems = [...banner_subtitles, ...section_texts, ...section_images];
// const fadeInItems = document.querySelectorAll('.transparent');

fadeInItems.forEach((item) => {
	fadeInObserver.observe(item);
});

// animate marquee text
const marquee = document.querySelector('.marquee');
window.addEventListener('scroll', () => {
	let pageOffset = window.scrollY;
	let pos = pageOffset * 0.2 * 2;
	let isVisible =
		window.innerHeight - marquee.getBoundingClientRect().top > 0 &&
		marquee.getBoundingClientRect().top > 0;

	if (isVisible) {
		marquee.style.transform = `translateX(${pos}px)`;
	}
});
