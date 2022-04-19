const profileOpenPopupButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup-edit");
const popupCard = document.querySelector(".popup-card");
const buttonAddCard = document.querySelector(".profile__add-button");
const nameInput = document.querySelector(".form__text_input_name");
const jobInput = document.querySelector(".form__text_input_job");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const profileForm = document.querySelector(".popup_form-profile");

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
  closePopup(profilePopup);
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
  handleProfileFormSubmit
};
