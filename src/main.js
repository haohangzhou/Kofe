import {
	scrollToTop,
	scrollTo,
	fadeIn,
	parallax,
	marquee,
} from './modules/animations.js';
import { MD } from './modules/constants.js';
// nodes
const banner_subtitles = document.querySelectorAll('.banner_subtitle');
const book_button = document.querySelector('.nav_link_button');
const book_form = document.querySelector('.form_container');
const conceal_text = document.querySelectorAll('.conceal');
const header = document.querySelector('header');
const header_buttons = document.querySelectorAll('.header_button');
const nav = document.querySelector('nav');
const nav_links = document.querySelectorAll('.nav_link');
const marquee_texts = document.querySelectorAll('.marquee');
const menu_button = document.querySelector('#menu_button');
const menu_section = document.querySelector('#menu_section');
const parallax_items = document.querySelectorAll('.parallax');
const scroll_top_buttons = document.querySelectorAll('.scroll-to-top');
const section_images = document.querySelectorAll('.section_image');
const section_texts = document.querySelectorAll('.section_text');
const sticky_button = document.querySelector('.sticky_button');

scroll_top_buttons.forEach((item) => {
	scrollToTop(item);
});

scrollTo(book_button, book_form);
scrollTo(menu_button, menu_section);

// toggle nav on mobile view
header_buttons.forEach((button) => {
	button.addEventListener('click', () => {
		nav.classList.toggle('slide_down');
	});
});

//close menu after click on the link
nav_links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('slide_down');
	});
});

// scroll trigger
// trigger when 20% of the element is in view
const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.2,
};

const fadeInObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting && fadeIn(entry.target);
	});
}, options);

const fadein_items = [...banner_subtitles, ...section_texts, ...section_images];

fadein_items.forEach((item) => {
	fadeInObserver.observe(item);
});

// scroll link animation
window.addEventListener('scroll', () => {
	let pageOffset = window.scrollY;

	// auto hide header and sticky button on medium screen and scroll more than 200 px
	const hideThreshold = 300;
	window.innerWidth >= MD &&
		header.classList.toggle('collaps', pageOffset > hideThreshold);
	sticky_button.classList.toggle('hidden', pageOffset < hideThreshold);

	// parallax banner text
	parallax_items.forEach((item) => {
		let y = window.innerHeight - item.getBoundingClientRect().top;
		y > 0 && parallax(item, pageOffset);
	});

	const isInView = (element) => {
		let isVisible =
			window.innerHeight - element.getBoundingClientRect().top > 0 &&
			element.getBoundingClientRect().top > 0;
		return isVisible;
	};

	marquee_texts.forEach((text) => {
		isInView(text) && marquee(text, pageOffset);
	});
});

// reveal emphasize text in about sections
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

// form handling
const submit_button = document.querySelector('.form_button');
submit_button.addEventListener('click', (e) => {
	e.preventDefault();
});
