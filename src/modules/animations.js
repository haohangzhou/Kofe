export const scrollToTop = (element) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
};

export const scrollTo = (element, target) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		target.scrollIntoView({
			behavior: 'smooth',
		});
	});
};

export const fadeIn = (element) => {
	element.classList.remove('transparent');
};

export const parallax = (element, pageOffset) => {
	const speed = element.dataset.speed;
	const speed_modifier = 0.15;
	let pos = pageOffset * speed * speed_modifier;
	element.style.transform = `translateY(-${pos}%)`;
};

export const animateMarquee = (element, pageOffset) => {};

export const marquee = (element, pageOffset) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			entry.isIntersecting && animateMarquee(element, pageOffset);
		});
	});
};
