const widthDOMElement = document.getElementById('widthSize');
const heightDOMElement = document.getElementById('heightSize');
const quantityDOMElement = document.getElementById('bannerQuantity');
const eyeletsDOMElement = document.getElementById('eyelets');
const sizingDOMElement = document.getElementById('sizing');
const priceDOMElement = document.getElementById('bannerPrise');
const SQUARE_METER = 380;
const EYELET = 30;
const SIZING = 50;
let PRICE = 0;


const bannerCost = () => {
	// Преобразуем значения в числа и рассчитываем стоимость
	const width = parseFloat(widthDOMElement.value) || 0; // Если поле пустое, подставляется 0
	const height = parseFloat(heightDOMElement.value) || 0;
	const quantity = parseFloat(quantityDOMElement.value) || 1;
	const area = width * height; // Рассчитываем площадь
	const areaSizing = (width + height) * 2 * SIZING;; // Рассчитываем стоимость проклейки

	if (quantity !== 0) {
		PRICE = area * SQUARE_METER * quantity;
		if (sizingDOMElement.checked) {
			PRICE = PRICE + areaSizing;
		}
		priceDOMElement.value = `${PRICE.toFixed(2)} RUB`;
	} else {
		PRICE = area * SQUARE_METER; // Рассчитываем стоимость
	// Отображаем результат
		if (sizingDOMElement.checked) {
			PRICE = PRICE + areaSizing;
		}
		priceDOMElement.value = `${PRICE.toFixed(2)} RUB`; // Форматируем до 2
	}

  };

  // Обновление цены при изменении значений в полях ввода
  widthDOMElement.addEventListener('input', bannerCost);
  heightDOMElement.addEventListener('input', bannerCost);
  quantityDOMElement.addEventListener('input', bannerCost);
  sizingDOMElement.addEventListener('input', bannerCost);
