import {
  openPopup,
  closePopup,
} from './modal';

const popupCard = document.querySelector(".popup-card");
const cards = document.querySelector(".card");
const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoName = document.querySelector(".popup-photo__name");
const popupPhotoImgLink = document.querySelector(".popup-photo__img");
const popupFormCard = document.querySelector(".popup__form-card");


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

// добавление новых карточек

function setDeleteHandler(el) {
  el.querySelector(".card__delete").addEventListener("click", handleCardDelete);
}

function handleCardDelete(event) {
  event.target.closest(".card__item").remove();
}

//удаление карточки

export {
  initialCards,
  createCard,
  renderinitialCards,
  addCard,
  setDeleteHandler,
  handleCardDelete
}
