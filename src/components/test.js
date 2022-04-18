const profileOpenPopupButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup-edit");
const profileCloseButton = document.querySelector(".popup-edit__close");
const popupCard = document.querySelector(".popup-card");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonCloseCard = document.querySelector(".popup-card__close");
const cards = document.querySelector(".card");
const popupAddedCardButton = document.querySelector(".popup-card__button");
const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoClose = document.querySelector(".popup-photo__close");
const photoLink = document.querySelector(".card__image");
const photoName = document.querySelector(".card__name");
const popupPhotoName = document.querySelector(".popup-photo__name");
const popupPhotoImgLink = document.querySelector(".popup-photo__img");

const nameInput = document.querySelector(".form__text_input_name");
const jobInput = document.querySelector(".form__text_input_job");
const profileInfo = document.querySelector(".profile__info");

const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const profileForm = document.querySelector(".popup_form-profile");
const popupFormCard = document.querySelector(".popup__form-card");

// const editProfile = document.querySelector('.profile__avatar-container');
// const popupProfileAvatar = document.querySelector('.popup-profile');
// const popupProfileClose = document.querySelector('.popup-profile__close')

function openPopup(popup) {
  popup.classList.add("popup_opened");

  function closeCurTargetPopup(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
      popup.removeEventListener("click", closeCurTargetPopup);
    }
  }

  function closeKeyPopup(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      closePopup(popup);
      document.removeEventListener("keydown", closeKeyPopup);
    }
  }
  popup.addEventListener("click", closeCurTargetPopup);
  document.addEventListener("keydown", closeKeyPopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

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

// editProfile.addEventListener('click', function () {
//   openPopup(popupProfileAvatar);
// });
// popupProfileClose.addEventListener('click', function () {
//   closePopup(popupProfileAvatar)
// });

// Открытие и закрытие попап

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(profilePopup);
}

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

import {
  enableValidation
} from '.validate.js';
enableValidation();
