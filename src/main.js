// animate subtitle onload
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

// animate section titles and section images while in view
const section_texts = document.querySelectorAll('.section_text');
const section_images = document.querySelectorAll('.section_image');

const fadeInWhileInView = (entries) => {
	entries.forEach((entry) => {
		entry.target.classList.remove('transparent');
	});
};

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.2,
};
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting && fadeInAnimation(entry.target);
	});
}, options);

const oberveItems = [...section_texts, ...section_images];

oberveItems.forEach((item) => {
	observer.observe(item);
});
