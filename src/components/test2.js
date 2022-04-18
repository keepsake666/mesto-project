// -------------валидация
import {
  showInputError,
  hideInputError,
  checkInputValidity,
  hasInvalidInput,
  toggleButtonState,
  setEventListeners,
  enableValidation
} from '.validate';
showInputError(formElement, inputElement, errorMessage);
hideInputError(formElement, inputElement);
checkInputValidity(formElement, inputElement);
hasInvalidInput(inputList);
toggleButtonState(inputList, buttonElement);
setEventListeners(formElement);
enableValidation();

// --------------карточки
import {
  popupCard,
  cards,
  popupPhoto,
  popupPhotoName,
  popupPhotoImgLink,
  popupFormCardinitialCards,
  templateCard,
  nameCard,
  linkCard,
  render,
  createCard,
  renderinitialCards,
  addCard,
  setDeleteHandler,
  handleCardDelete
} from './card';
createCard(item);
renderinitialCards(date);
addCard(evt);
setDeleteHandler(el);
handleCardDelete(event);
popupFormCard.addEventListener("submit", addCard);
render();

// -----------модалки

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
