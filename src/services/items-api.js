import tokenService from './tokenService';

const BASE_URL = '/api/items/';


// export function index() {
  //   const options = {
    //     method: 'GET',
    //     headers: {
      //       'Authorization': 'Bearer ' + tokenService.getToken()
      //     }
      //   };
      //   return fetch(BASE_URL, options).then(res => res.json());
      // }
      
export function index() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(item) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(item)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}

export function update(item) {
  return fetch(`${BASE_URL}/${item._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(item)
  }).then(res => res.json());
}