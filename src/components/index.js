import '../pages/index.css';
const cards = document.querySelector(".card");
const popupAddedCardButton = document.querySelector(".popup-card__button");
const photoLink = document.querySelector(".card__image");
const photoName = document.querySelector(".card__name");
const popupPhotoName = document.querySelector(".popup-photo__name");
const popupPhotoImgLink = document.querySelector(".popup-photo__img");
const profileInfo = document.querySelector(".profile__info");
const popupFormCard = document.querySelector(".popup__form-card");
import {
  initialCards,
  renderinitialCards,
  createCard,
  addCard,
} from './card'

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

// ----------------

function render() {
  initialCards.forEach(renderinitialCards);
};
popupFormCard.addEventListener("submit", addCard);
render();

// --------------------------------------------валидация-----------------------------------------

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add("form__input_type_error");
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add("form__input-error_active");
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove("form__input_type_error");
//   errorElement.classList.remove("form__input-error_active");
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add("button_inactive");
//     buttonElement.disabled = true
//   } else {
//     buttonElement.classList.remove("button_inactive");
//     buttonElement.disabled = false
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(".form__input"));
//   const buttonElement = formElement.querySelector(".form__submit")

//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".form"));
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// };
// enableValidation();

//   -------------------------------------------------------------------------------------------
