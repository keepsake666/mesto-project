import '../pages/index.css';
// ------------------------
import {
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
  popupCard,
  buttonAddCard,
  nameInput,
  jobInput,
  profileName,
  profileText,
  profileForm,
  openPopup,
  closePopup,
  handleProfileFormSubmit,
  editProfile,
  popupProfileAvatar,
  handleAvatarFormSubmit,
  formAvatar
} from './modal';
// ------------------------
import {
  apiProfile,
  apiCard,
  apiProfilePatch
} from './api'

let userId;
// ------------------------закрытие попап

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

// ------------------------открытие попап

profileOpenPopupButton.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
});
editProfile.addEventListener('click', function () {
  openPopup(popupProfileAvatar);
});
buttonAddCard.addEventListener("click", function () {
  openPopup(popupCard);
});
// ------------------------аватарка

formAvatar.addEventListener("submit", handleAvatarFormSubmit);

// ------------------------профиль

profileForm.addEventListener("submit", handleProfileFormSubmit);

// ------------------------добавление карточек

popupFormCard.addEventListener("submit", addCard);

// ------------------------валидация
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

// ------------------------c api данные профиля и карточек
const profileAvatar = document.querySelector('.profile__avatar');

Promise.all([apiProfile(), apiCard()])
  .then(([data, cardData]) => {
    profileName.textContent = data.name;
    profileText.textContent = data.about;
    profileAvatar.src = data.avatar;
    userId = data._id;
    cardData.forEach(renderinitialCards);
  })
  .catch((er) => {
    console.error(er)
  });
