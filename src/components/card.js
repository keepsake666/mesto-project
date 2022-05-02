import {
  openPopup,
  closePopup,
} from './modal';
// ------------------------
import {
  apiCardPost,
  apiCardDelete,
  apiLikeCard,
  apiLikeDelete,
} from './api';

import {
  userId
} from './index';
// ------------------------
const popupCard = document.querySelector(".popup-card");
const cards = document.querySelector(".card");
const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoName = document.querySelector(".popup-photo__name");
const popupPhotoImgLink = document.querySelector(".popup-photo__img");
const popupFormCard = document.querySelector(".popup__form-card");
const popupSubmitCard = document.querySelector(".popup-card__button");
const templateCard = document.querySelector(".card-template").content;
const nameCard = document.querySelector(".form__text_input_name-card");
const linkCard = document.querySelector(".form__text_input_link-card");

// -----------------создание карточек

function createCard(item) {
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector(".card__name").innerText = item.name;
  const cardNumberLike = cardElement.querySelector('.card__number-like');
  cardNumberLike.innerText = item.likes.length;
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteDisable = cardElement.querySelector('.card__delete');
  const cardLikeNumber = cardElement.querySelector('.card__like');

  if (item.likes) {
    item.likes.forEach(function (like) {
      if (like._id === userId) {
        cardLikeNumber.classList.add('card__like_active')
      }
    })
  };
  cardLikeNumber.innerText = item._id;
  cardDeleteDisable.innerText = item._id;
  if (!item.link) {
    cardImage.src = "https://imagetext2.ru/pics_max/images_3162.gif";
  } else {
    cardImage.src = item.link;
  };
  if (item.owner._id != userId) {
    cardDeleteDisable.classList.add('card__delete_disable')
  };
  cardImage.alt = item.name;
  // -----------------добавление и удаление лайка
  cardLikeNumber.addEventListener("click", function (evt) {
    if (evt.target.classList[1] != 'card__like_active') {
      apiLikeCard(evt.target.innerText)
        .then(res => {
          cardNumberLike.innerText = res.likes.length
          evt.target.classList.add("card__like_active")
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      apiLikeDelete(evt.target.innerText)
        .then(res => {
          cardNumberLike.innerText = res.likes.length
          evt.target.classList.remove("card__like_active");
        })
        .catch((err) => {
          console.log(err);
        })
    };
  });

  cardImage
    .addEventListener("click", function (evt) {
      openPopup(popupPhoto);
      const target = evt.target;
      popupPhotoName.innerText = target.getAttribute("alt");
      popupPhotoImgLink.src = target.getAttribute("src");
      popupPhotoImgLink.alt = target.getAttribute("alt");
    });
  setDeleteHandler(cardElement);
  return cardElement;
};

function renderinitialCards(date) {
  const newCard = createCard(date);
  cards.prepend(newCard);
}
// ----------------добавление новых карточек
function addCard(evt) {
  evt.preventDefault();
  popupSubmitCard.textContent = "Создать..."
  apiCardPost(nameCard.value, linkCard.value)
    .then(res => {
      renderinitialCards({
        name: nameCard.value,
        link: linkCard.value,
        _id: res._id,
        likes: '',
        cardLikeNumber: 0,
        owner: {
          _id: userId
        },
      });
      closePopup(popupCard);
      nameCard.value = "";
      linkCard.value = "";
      popupSubmitCard.classList.add('form__button_inactive');
      popupSubmitCard.disabled = true
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupSubmitCard.textContent = "Создать";
    })
};
//-------------------удаление карточки
function setDeleteHandler(el) {
  el.querySelector(".card__delete").addEventListener("click", handleCardDelete);
};

function handleCardDelete(event) {
  apiCardDelete(event.target.innerText)
    .then(res => {
      event.target.closest(".card__item").remove()
    })
    .catch((err) => {
      console.log(err);
    })
};

export {
  renderinitialCards,
  addCard,
  popupFormCard,
};
