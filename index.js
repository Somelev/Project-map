const buttons = document.querySelectorAll('button');
let openBtn = null;

for (const button of buttons) {
	button.addEventListener('click', function () {
		const currentButton = this.closest('button');
		const icon = currentButton.querySelector('.button span');
		const text = currentButton.querySelector('.button__text');

		if (openBtn && openBtn !== currentButton) {
			const openIcon = openBtn.querySelector('.button span');
			const openText = openBtn.querySelector('.button__text');

			openIcon.classList.remove('button__icon__active');
			openIcon.classList.add('button__icon');

			openText.classList.remove('button__text__active');
		}

		icon.classList.toggle('button__icon__active');
		icon.classList.toggle('button__icon');

		text.classList.toggle('button__text__active');

		openBtn = currentButton;
	});
}
