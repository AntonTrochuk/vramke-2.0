const productCard = document.querySelector('.product-card__section-description');
const input = productCard.querySelector('.product-card__input');
const conclusion = productCard.querySelector('.product-card__input-conclusion');
const select = productCard.querySelector('.product-card__select');
let valueInput;

const costCalculator = () => {
	const calculateCost = () => {
		valueInput = input.value;
		if (isNaN(valueInput) || valueInput <= 0) {
			conclusion.value = "Введите количество";
			return;
		}

		let price = 0;

		if (select.value === '1') {
			price = valueInput * 100;
		} else if (select.value === '2') {
			price = valueInput * 150;
		}
		conclusion.value = `${price} RUB.`;
	}
	input.addEventListener('input', calculateCost);
	select.addEventListener('change', calculateCost);
}

export { costCalculator };
