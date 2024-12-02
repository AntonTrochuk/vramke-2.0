const sectionImage = document.querySelector('.product-card__section-image');
const bigImage = sectionImage.querySelector('.product-card__image'); // Это основное изображение
const imageItems = sectionImage.querySelectorAll('.product-card__image-item'); // Маленькие изображения

const imageSlider = () => {
  imageItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      bigImage.src = item.src;
    });
  });
};



export { imageSlider };
