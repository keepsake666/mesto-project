const profileOpenPopupButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup-edit");
const profileCloseButton = document.querySelector(".popup-edit__close");
const popupCard = document.querySelector(".popup-card");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonCloseCard = document.querySelector(".popup-card__close");
const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoClose = document.querySelector(".popup-photo__close");
const nameInput = document.querySelector(".form__text_input_name");
const jobInput = document.querySelector(".form__text_input_job");
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");
const profileForm = document.querySelector(".popup_form-profile");

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(profilePopup);
}

export {
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
}
