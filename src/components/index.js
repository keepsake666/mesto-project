import '../pages/index.css';
// ------------------------
import {
  initialCards,
  renderinitialCards,
  addCard,
  popupFormCard
} from './card'
// ------------------------
import {
  enableValidation
} from './validate'
// ------------------------
import {
  profileOpenPopupButton,
  profilePopup,
  profileCloseButton,
  popupCard,
  buttonAddCard,
  buttonCloseCard,
  popupPhoto,
  popupPhotoClose,
  nameInput,
  jobInput,
  profileName,
  profileText,
  profileForm,
  openPopup,
  closePopup,
  handleProfileFormSubmit
} from './modal';
// ------------------------
profileOpenPopupButton.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
});
profileCloseButton.addEventListener("click", function () {
  closePopup(profilePopup);
});

buttonAddCard.addEventListener("click", function () {
  openPopup(popupCard);
});
buttonCloseCard.addEventListener("click", function () {
  closePopup(popupCard);
});

popupPhotoClose.addEventListener("click", function () {
  closePopup(popupPhoto);
});
profileForm.addEventListener("submit", handleProfileFormSubmit);

// ------------------------

function render() {
  initialCards.forEach(renderinitialCards);
};
popupFormCard.addEventListener("submit", addCard);
render();

// ------------------------
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
