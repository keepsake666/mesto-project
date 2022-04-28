// ------------------------
import {
  apiProfilePatch,
  apiAvatarRedact
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
// ------------------------

// ---------------
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closeKeyPopup);
}
// ---------------
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeKeyPopup);
}

function closeKeyPopup(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}
// ---------------
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  apiProfilePatch(profileName.textContent,profileText.textContent);
  closePopup(profilePopup);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  imageProfileAvatar.src = inputLinkAvatar.value;
  apiAvatarRedact(inputLinkAvatar.value)
  closePopup(popupProfileAvatar);
  inputLinkAvatar.value = '';
  submitAvatar.classList.add('form__button_inactive');
  submitAvatar.disabled = true
}
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
