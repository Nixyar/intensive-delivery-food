const openPopup = document.querySelector('.openPopup');
const closePopup = document.querySelector('.closePopup');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', () => {
    popup.classList.add('is-open');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('is-open');
});
