const url = 'https://nomoreparties.co/v1/plus-cohort-9';
const aut = 'fee29014-062b-4401-8525-ee1398a9c8ac';
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
      headers: {
        authorization: aut,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
};
// -----------------------карточки с api
function apiCard() {
  return fetch(url + '/cards', {
      headers: {
        authorization: aut
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
};
// ------------------------информация о профиле на api
function apiProfilePatch(nameProfile, aboutProfile) {
  return fetch(url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: aut,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameProfile.value,
        about: aboutProfile.value
      })
    })
    .then(checkResponse)
};

// ------------------------отправление карточки
function apiCardPost(nameCard, urlCard) {
  return fetch(url + '/cards', {
      method: 'POST',
      headers: {
        authorization: aut,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameCard,
        link: urlCard
      })
    })
    .then(checkResponse)
}
// ------------------------удаление карточки
function apiCardDelete(idCard) {
  fetch(idCard, {
    method: 'DELETE',
    headers: {
      authorization: aut,
      'Content-Type': 'application/json'
    }
  });
}
// ------------------------добавить лайк
function apiLikeCard(idLike) {
  return fetch(idLike, {
    method: 'PUT',
    headers: {
      authorization: aut,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
}
// ------------------------удалить лайк
function apiLikeDelete(idLike) {
  return fetch(idLike, {
    method: 'DELETE',
    headers: {
      authorization: aut,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
}
// ------------------------аватарка отправка
function apiAvatarRedact(urlAvatar) {
  return fetch(url + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: aut,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: urlAvatar
      })
    })
    .then(checkResponse)
}
// ------------------------аватарка загрузка

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
}
