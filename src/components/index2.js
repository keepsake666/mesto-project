import '../pages/index.css';
const popupAddedCardButton = document.querySelector(".popup-card__button");
const photoLink = document.querySelector(".card__image");
const photoName = document.querySelector(".card__name");
const profileInfo = document.querySelector(".profile__info");

const profileName = document.querySelector(".profile__name");
const popupFormCard = document.querySelector(".popup__form-card");

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

import {
  popupCard,
  cards,
  popupPhoto,
  popupPhotoName,
  popupPhotoImgLink,
  templateCard,
  nameCard,
  linkCard,
  render,
  createCard,
  renderinitialCards,
  addCard,
  setDeleteHandler,
  handleCardDelete
} from './card'

// ----------------------

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

// добавление информации в профиль

const initialCards = [{
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const templateCard = document.querySelector(".card-template").content;
const nameCard = document.querySelector(".form__text_input_name-card");
const linkCard = document.querySelector(".form__text_input_link-card");

function render() {
  initialCards.forEach(renderinitialCards);
}

function createCard(item) {
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector(".card__name").innerText = item.name;
  const cardImage = cardElement.querySelector(".card__image");
  if (!item.link) {
    cardImage.src = "https://imagetext2.ru/pics_max/images_3162.gif";
  } else {
    cardImage.src = item.link;
  }
  cardImage.alt = item.name;
  cardElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", function (evt) {
      openPopup(popupPhoto);
      const target = evt.target;
      popupPhotoName.innerText = target.getAttribute("alt");
      popupPhotoImgLink.src = target.getAttribute("src");
      popupPhotoImgLink.alt = target.getAttribute("alt");
    });

  setDeleteHandler(cardElement);
  return cardElement;
}

function renderinitialCards(date) {
  const newCard = createCard(date);
  cards.prepend(newCard);
}

function addCard(evt) {
  evt.preventDefault();
  renderinitialCards({
    name: nameCard.value,
    link: linkCard.value,
  });
  closePopup(popupCard);
  nameCard.value = "";
  linkCard.value = "";
}

popupFormCard.addEventListener("submit", addCard);

// добавление новых карточек

function setDeleteHandler(el) {
  el.querySelector(".card__delete").addEventListener("click", handleCardDelete);
}

function handleCardDelete(event) {
  event.target.closest(".card__item").remove();
}

//удаление карточки

render();

// --------------------------------------------валидация-----------------------------------------

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
    buttonElement.disabled = true
  } else {
    buttonElement.classList.remove("button_inactive");
    buttonElement.disabled = false
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__submit")

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
enableValidation();

//   -------------------------------------------------------------------------------------------
