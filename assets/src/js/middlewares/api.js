import fetch from 'isomorphic-fetch'

export class Request {

  static _handleResponse (response) {
    if (response.status > 399) {
      return new Promise((yep, nope) => {
        response
          .json()
          .then(response => nope(response.error.message))
      })
    }
    return response.json()
  }

  static post (url, params, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: params ? JSON.stringify(params) : data
    })
      .then(Request._handleResponse)
  }

}
