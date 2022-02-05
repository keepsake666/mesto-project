const profileOpenPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup__edit-profile');
const popupCloseButton = document.querySelector('.popup__edit-profile_close');
const popupCard = document.querySelector('.popup__added-card');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseCard = document.querySelector('.popup__added-card_close');
const cards = document.querySelector('.card');
const popupAddedCardButton = document.querySelector('.popup__added-card_button');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoClose = document.querySelector('.popup-photo__close');
const photoLink = document.querySelector('.card__image');
const photoName = document.querySelector('.card__name');
let popupPhotoName = document.querySelector('.popup-photo__name');
let popupPhotoImgLink = document.querySelector('.popup-photo__img');

let nameInput = document.querySelector('.form__text_input_name');
let jobInput = document.querySelector('.form__text_input_job');
let profileInfo = document.querySelector('.profile__info');

let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup_form-profile');

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
  nameCard.value = "";
  linkCard.value = "";
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

// добавление информации в профиль

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const templateCard = document.querySelector('.card-template').content;
const nameCard = document.querySelector('.form__text_input_name-card');
const linkCard = document.querySelector('.form__text_input_link-card');


function render() {
  initialCards.forEach(renderinitialCards);
}
function renderinitialCards(text) {
  const newCard = templateCard.cloneNode(true);
  newCard.querySelector('.card__name').innerText = text.name;
  if (!text.link) {
    newCard.querySelector('.card__image').src = 'https://imagetext2.ru/pics_max/images_3162.gif';
  }
  else {
    newCard.querySelector('.card__image').src = text.link;
  }
  newCard.querySelector('.card__image').alt = text.name;
  newCard.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  })

  deleteCard(newCard);

  cards.prepend(newCard);
}

function addCard() {
  renderinitialCards({ name: nameCard.value, link: linkCard.value });
  closePopupCard();
}
popupAddedCardButton.addEventListener('click', addCard);
render()

// добавление новых карточек

function deleteCard(el) {
  el.querySelector('.card__delete').addEventListener('click', cardDelete)
}
function cardDelete(event) {
  event.target.closest('.card__item').remove();
}

//удаление карточки

function openPopupPhoto() {
  popupPhoto.classList.add('popup_opened');
  nameInput.textContent = popupPhotoName.textContent;
}

function target(event) {
  if (event.target.closest('.card__image')) {
    openPopupPhoto();
  }
  const target = event.target;
  popupPhotoName.innerText = target.getAttribute('alt');
  popupPhotoImgLink.src = target.getAttribute('src')
  popupPhotoImgLink.alt = target.getAttribute('alt')
}

cards.addEventListener('click', target);

function closePopupPhoto() {
  popupPhoto.classList.remove('popup_opened')
}

popupPhotoClose.addEventListener('click', closePopupPhoto);


//открытие фото
