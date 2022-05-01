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
} from './api'
// ------------------------
const popupCard = document.querySelector(".popup-card");
const cards = document.querySelector(".card");
const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoName = document.querySelector(".popup-photo__name");
const popupPhotoImgLink = document.querySelector(".popup-photo__img");
const popupFormCard = document.querySelector(".popup__form-card");
const popupSubmitCard = document.querySelector(".popup-card__button");
const myIdApi = '9d9242d0ffb0293e65591c4a';
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
  const cardDeleteDisable = cardElement.querySelector('.card__delete')
  // const cardLikeNumber = cardElement.querySelector('.card__like')

  // item.likes.forEach(function (item) {
  //   if (item._id === myIdApi) {
  //     cardLikeNumber.classList.add('card__like_active')
  //   }
  // })
  // cardLikeNumber.innerText = item._id
  cardDeleteDisable.innerText = item._id
  if (!item.link) {
    cardImage.src = "https://imagetext2.ru/pics_max/images_3162.gif";
  } else {
    cardImage.src = item.link;
  };
  if (item.owner._id != myIdApi) {
    cardDeleteDisable.classList.add('card__delete_disable')
  }
  cardImage.alt = item.name;
  // cardLikeNumber.addEventListener("click", function (evt) {
  //   if (evt.target.classList[1] != 'card__like_active') {
  //     apiLikeCard('https://nomoreparties.co/v1/plus-cohort-9/cards/likes/' + evt.target.innerText)
  //     cardNumberLike.innerText = item.likes.length + 1
  //   } else {
  //     apiLikeDelete('https://nomoreparties.co/v1/plus-cohort-9/cards/likes/' + evt.target.innerText)
  //     cardNumberLike.innerText = item.likes.length - 1
  //   };
  //   evt.target.classList.toggle("card__like_active");
  // });
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
}

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
        likes: '',
        _id:'',
        owner:'',
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
}
//-------------------удаление карточки
function setDeleteHandler(el) {
  el.querySelector(".card__delete").addEventListener("click", handleCardDelete);
}

function handleCardDelete(event) {
  event.target.closest(".card__item").remove();
  apiCardDelete('https://nomoreparties.co/v1/plus-cohort-9/cards/' + event.target.innerText)
};

export {
  renderinitialCards,
  addCard,
  popupFormCard,
}
