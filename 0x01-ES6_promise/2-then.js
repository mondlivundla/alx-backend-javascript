function handleResponseFromAPI(promise) {
  return Promise
    .then(() => ({status: 200, body: 'success',}))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI
