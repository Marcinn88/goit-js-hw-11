import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '34986976-bc41fc690d31dec5284951a8a';

export class PixabayApi {
  constructor() {
    this.page = null;
    this.searchQuery = '';
    this.per_page = 40;
  }

  fetchPhoto() {
    const options = {
      key: KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: this.per_page,
    };

    return axios.get(`${URL}`, { params: options });
  }
}
