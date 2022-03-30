const defaultBackgroundUrl = 'image/main/main.png';
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main__title');
const tabs = document.querySelectorAll('.main__link');
const services = document.querySelector('.services');

for (let tab of tabs) {
	tab.addEventListener('mouseenter', function (event) {
		const name = event.target.dataset.name;

		services.style.backgroundImage = `url(image/main/background/${name}.png)`;
		mainTitle.classList.add(name);
		services.classList.add('open');
		main.classList.add('open');
	});

	tab.addEventListener('mouseleave', function () {
		mainTitle.classList.remove('fixes', 'types', 'design', 'renovation');
		services.style.backgroundImage = '';
		services.classList.remove('open');
		main.classList.remove('open');
	});
}
