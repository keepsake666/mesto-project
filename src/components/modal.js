// ------------------------
import {
  apiProfilePatch,
  apiAvatarRedact,
} from './api'
// ------------------------
const profileOpenPopupButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup-edit");
const popupCard = document.querySelector(".popup-card");
const buttonAddCard = document.querySelector(".profile__add-button");
const nameInput = document.querySelector(".form__text_input_name");
const jobInput = document.querySelector(".form__text_input_job");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const profileForm = document.querySelector(".popup_form-profile");
const editProfile = document.querySelector('.profile__avatar-container');
const popupProfileAvatar = document.querySelector('.popup-profile');
const formAvatar = document.querySelector('.popup__avatar');
const imageProfileAvatar = document.querySelector('.profile__avatar');
const inputLinkAvatar = document.querySelector('.form__text_input_link-profile');
const submitAvatar = document.querySelector('.popup__avatar-submit');
const submitProfile = document.querySelector('.form__submit-profile');

// --------------- открытие попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closeKeyPopup);
};
// --------------- закрытие попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeKeyPopup);
};
// --------------- закрытие попап по еск
function closeKeyPopup(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
};
// --------------- сабмит профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  submitProfile.textContent = "Сохранить...";
  apiProfilePatch(nameInput, jobInput)
    .then((res) => {
      closePopup(profilePopup)
      profileName.textContent = nameInput.value;
      profileText.textContent = jobInput.value;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitProfile.textContent = "Сохранить";
    })
};
// ---------------сабмит аватарки
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  submitAvatar.textContent = "Сохранить..."
  apiAvatarRedact(inputLinkAvatar.value)
    .then(res => {
      closePopup(popupProfileAvatar);
      imageProfileAvatar.src = inputLinkAvatar.value;
      inputLinkAvatar.value = '';
      submitAvatar.classList.add('form__button_inactive');
      submitAvatar.disabled = true
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitAvatar.textContent = "Сохранить";
    })
};

// ---------------
export {
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
  handleAvatarFormSubmit,
  editProfile,
  popupProfileAvatar,
  formAvatar
};
