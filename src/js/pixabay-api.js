import axios from 'axios';

const apiKey = '50766539-a3a9faf2feed981fcf2beabe9';
const apiURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(apiURL, {
      params: {
        key: apiKey,
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}
