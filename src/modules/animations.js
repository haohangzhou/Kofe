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
	const verticalPercentage =
		element.getBoundingClientRect().top / window.innerHeight;
	const xPos = (1 - verticalPercentage) * 100 * 10 * 0.5;
	console.log('element: ', element);
	console.log('verticalPercentage: ', verticalPercentage);
	console.log('xPos: ', xPos);
	element.style.transform = `translateX(${xPos}px)`;
};
