const buttonOpen = document.querySelector('.navigation__toggle--open');
const buttonClose = document.querySelector('.navigation__toggle--close');
const wrapper = document.querySelector('.wrapper--open');


const wrapperMenu = () => {
  buttonOpen.addEventListener('click',() => {
    wrapper.classList.remove('wrapper--open');
    buttonOpen.classList.add('visually-hidden');
    buttonClose.classList.remove('visually-hidden');
  });

  buttonClose.addEventListener('click',() => {
    wrapper.classList.add('wrapper--open');
    buttonClose.classList.add('visually-hidden');
    buttonOpen.classList.remove('visually-hidden');
  });
};

export {wrapperMenu};
