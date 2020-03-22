function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');

window.addEventListener('keyup', function (e) {
	const currTop = extractPos(avatar.style.top);
	avatar.style.top = `${currTop + 50}px`;
});

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};