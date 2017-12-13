export default class LocalStorageService {
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, value) {
    localStorage.setItem(key.toString(), JSON.stringify(value));
  }
}
