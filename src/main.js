let pageOffset;
const parallax_items = document.querySelectorAll('.parallax');
const marquee_texts = document.querySelectorAll('.marquee');
const header_buttons = document.querySelectorAll('.header_button');
const banner_subtitles = document.querySelectorAll('.banner_subtitle');
const section_texts = document.querySelectorAll('.section_text');
const section_images = document.querySelectorAll('.section_image');
const fadein_items = [...banner_subtitles, ...section_texts, ...section_images];
const conceal_text = document.querySelectorAll('.conceal');
const menu_button = document.querySelector('#menu_button');
const menu_section = document.querySelector('#menu_section');
const book_button = document.querySelector('.nav_link_button');
const book_form = document.querySelector('.form_container');
const scroll_top_buttons = document.querySelectorAll('.scroll-to-top');
scroll_top_buttons.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});

book_button.addEventListener('click', (e) => {
	e.preventDefault();
	book_form.scrollIntoView({
		behavior: 'smooth',
	});
});

menu_button.addEventListener('click', (e) => {
	e.preventDefault();
	menu_section.scrollIntoView({
		behavior: 'smooth',
	});
});

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.2, //trigger when 20% of the element is in view
};

// toggle nav on mobile view
const toggleNav = () => {
	const nav = document.querySelector('nav');
	nav.classList.toggle('slide_down');
};

header_buttons.forEach((button) => {
	button.addEventListener('click', () => {
		toggleNav();
	});
});

// fade in items when come in view
function fadeInAnimation(element) {
	element.classList.remove('transparent');
}

const fadeInWhileInView = (entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting && fadeInAnimation(entry.target);
	});
};

const fadeInObserver = new IntersectionObserver(fadeInWhileInView, options);

// const fadeInItems = document.querySelectorAll('.transparent');

fadein_items.forEach((item) => {
	fadeInObserver.observe(item);
});

// scroll base animation
const parallax = (element) => {
	const speed = element.dataset.speed;
	const speed_modifier = 0.15;
	let pos = pageOffset * speed_modifier * speed;
	element.style.transform = `translateY(-${pos}%)`;
};

window.addEventListener('scroll', () => {
	pageOffset = window.scrollY;

	const isVisible = (element) => {
		let isVisible =
			window.innerHeight - element.getBoundingClientRect().top > 0 &&
			element.getBoundingClientRect().top > 0;
		return isVisible;
	};
	// animate banner text
	parallax_items.forEach((item) => {
		let y = window.innerHeight - item.getBoundingClientRect().top;
		if (y > 0) {
			parallax(item);
		}
	});

	// animate marques
	let marquee_pos = pageOffset * 0.2 * 2;

	marquee_texts.forEach((text) => {
		if (isVisible(text)) {
			text.style.transform = `translateX(${marquee_pos}px)`;
		}
	});
});

// animate emphasize text
let isIntersecting = null;

const watchForText = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.isIntersecting &&
				conceal_text.forEach((text) => text.classList.add('conceal_animation'));
		});
	},
	{
		root: null,
		rootMargin: '0px',
		threshold: 1,
	}
);

watchForText.observe(section_texts[0]);
