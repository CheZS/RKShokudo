const API_BASE = '/api/';

export default class RestaurantService {
  random() {
    if (!fetch) {
      return;
    }

    let url = `${API_BASE}random`;
    return fetch(url).then(response => response.json())
    .then(data => {
      return (data || {}).name;
    });
  }
}
