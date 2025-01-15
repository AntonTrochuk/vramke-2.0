const items = ["Расходные материалы", "Чернила", "Фотобумага", "Пленка для ламинирования"];
const links = ["consumables.html", "test.html"];
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

searchInput.addEventListener('input', () => {
	const query = searchInput.value.toLowerCase();
	results.innerHTML = ''; // Очистка результатов перед поиском

	items.forEach((item, index) => {
		if (item.toLowerCase().includes(query)) {
			results.classList.remove('result-search--close'); // Открытие результатов

			// Создаём элемент списка и ссылку
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = item; // Используем значение переменной item
			a.href = links[index] || '#';; // Задаём ссылке значение атрибута href (можно изменить)

			// Добавляем ссылку внутрь li, а затем li в results
			li.appendChild(a);
			results.appendChild(li);

			a.classList.add('result-search-link');
		}
	});

	// Если нет совпадений, можно скрыть контейнер
	if (!results.innerHTML) {
		results.classList.add('result-search--close'); // Закрытие результатов
	}
});
