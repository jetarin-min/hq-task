import fetch from 'isomorphic-fetch';

import configs from '../configs';

const { baseURL } = configs;

const processFetch = (res) => (
  Promise.all([res.ok, res.json()])
    .then(([ok, response]) => {
      if (!ok) {
        return Promise.reject(response);
      }
      return { data: response };
    })
);

export default {
  get: url => (
    fetch(`${baseURL}${url}`, {
      method: 'GET',
      credentials: 'include',
    }).then(processFetch)
  ),
  post: (url, body = {}) => (
    fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(processFetch)
  ),
  delete: (url, body = {}) => (
    fetch(`${baseURL}${url}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(processFetch)
  ),
  put: (url, body = {}) => (
    fetch(`${baseURL}${url}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(processFetch)
  ),
};
