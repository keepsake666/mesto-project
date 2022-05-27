export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: 'fee29014-062b-4401-8525-ee1398a9c8ac',
    'Content-Type': 'application/json'
  }
};

export const formSelectors = {
  inputErrorClass: 'edit-form__input_error',
  inputSelector: '.edit-form__input',
  errorClass: 'edit-form__input__signature_active',
  submitButtonSelector: '.edit-form__button',
  inactiveButtonClass: 'edit-form__button_disabled',
  errorFormFieldClass: 'edit-form__input__signature'
}

export const cardItemSelector = '#card-item-template';
export const cardsContainerSelector = '.cards-container';

export const userInfoSelectors = {
  nameSelector: '.profile__name',
  aboutSelector: '.profile__field-of-activity',
  avatarSelector: '.profile__avatar'
}
