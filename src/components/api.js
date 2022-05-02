const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: 'fee29014-062b-4401-8525-ee1398a9c8ac',
    'Content-Type': 'application/json',
  },
};

const checkResponse = res => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}
// ------------------------информация о профиле c api
function apiProfile() {
  return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
    .then(checkResponse)
    .then(console.log(config.headers))
};
// -----------------------карточки с api
function apiCard() {
  return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then(checkResponse)
};
// ------------------------информация о профиле на api
function apiProfilePatch(nameProfile, aboutProfile) {
  return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: nameProfile.value,
        about: aboutProfile.value
      })
    })
    .then(checkResponse)
};
// ------------------------отправление карточки
function apiCardPost(nameCard, urlCard) {
  return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: nameCard,
        link: urlCard
      })
    })
    .then(checkResponse)
};
// ------------------------удаление карточки
function apiCardDelete(idCard) {
  return fetch(`${config.baseUrl}/cards/` + idCard, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(checkResponse)
};
// ------------------------добавить лайк
function apiLikeCard(idLike) {
  return fetch(`${config.baseUrl}/cards/likes/` + idLike, {
      method: 'PUT',
      headers: config.headers
    })
    .then(checkResponse)
};
// ------------------------удалить лайк
function apiLikeDelete(idLike) {
  return fetch(`${config.baseUrl}/cards/likes/` + idLike, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(checkResponse)
};
// ------------------------аватарка отправка
function apiAvatarRedact(urlAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: urlAvatar
      })
    })
    .then(checkResponse)
};

export {
  apiProfile,
  apiCard,
  apiProfilePatch,
  apiCardPost,
  apiCardDelete,
  apiLikeCard,
  apiLikeDelete,
  apiAvatarRedact,
  checkResponse
};
