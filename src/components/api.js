const url = 'https://nomoreparties.co/v1/plus-cohort-9';
const aut = 'fee29014-062b-4401-8525-ee1398a9c8ac';

// ------------------------информация о профиле c api
function apiProfile() {
  return fetch(url + '/users/me', {
      headers: {
        authorization: aut
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
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
    })
};
// ------------------------информация о профиле на api
function apiProfilePatch(nameProfile, aboutProfile) {
  fetch(url + '/users/me', {
    method: 'PATCH',
    headers: {
      authorization: aut,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameProfile,
      about: aboutProfile
    })
  });
}

// ------------------------отправление карточки
function apiCardPost(nameCard, urlCard) {
  fetch(url + '/cards', {
    method: 'POST',
    headers: {
      authorization: aut,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameCard,
      link: urlCard
    })
  });
}

export {
  apiProfile,
  apiCard,
  apiProfilePatch,
  apiCardPost
}
