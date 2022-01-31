const profileOpenPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup__edit-profile');
const popupCloseButton = document.querySelector('.popup__edit-profile_close');
const popupCard = document.querySelector('.popup__added-card');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseCard = document.querySelector('.popup__added-card_close');

let nameInput = document.querySelector('.form__text_input_name');
let jobInput = document.querySelector('.form__text_input_job');
let profileInfo = document.querySelector('.profile__info');

let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened')
}
profileOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function openPopupCard() {
  popupCard.classList.add('popup_opened')
}

function closePopupCard() {
  popupCard.classList.remove('popup_opened')
}
buttonAddCard.addEventListener('click', openPopupCard);
buttonCloseCard.addEventListener('click', closePopupCard);

// Открытие и закрытие попап

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);