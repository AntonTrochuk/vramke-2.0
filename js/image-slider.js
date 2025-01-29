const imageSlider = () => {
	const sectionImage = document.querySelector('.product-card__section-image');
	if (!sectionImage) {
		console.error('Секция с изображениями не найдена.');
		return;
	}

	const bigImage = sectionImage.querySelector('.big-picture'); // Основное изображение
	const imageLinks = sectionImage.querySelectorAll('.product-card__image-link'); // Ссылки на маленькие изображения

	if (!bigImage || imageLinks.length === 0) {
		console.error('Основное изображение или ссылки не найдены.');
		return;
	}

	imageLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			// Ищем <img> внутри ссылки
			const img = link.querySelector('img');
			if (img) {
				// Заменяем src основного изображения
				bigImage.src = img.currentSrc || img.src;

				// Обновляем srcset для <source>, если нужно
				const picture = bigImage.closest('picture');
				if (picture) {
					const sources = picture.querySelectorAll('source');
					sources.forEach((source) => {
						const newSrc = img.currentSrc || img.src;
						source.srcset = newSrc;
					});
				}

				// Добавляем активный класс
				imageLinks.forEach((el) => el.classList.remove('active'));
				link.classList.add('active');
			} else {
				console.error('Изображение <img> не найдено внутри ссылки.');
			}
		});
	});
};

// Инициализация
document.addEventListener('DOMContentLoaded', imageSlider);

export { imageSlider };
