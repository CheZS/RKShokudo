import LocalStorageService from './localstorage';

const COUNTER_KEY = 'RkshokudoCount';

export default class CounterService {
  constructor() {
    this.localStorageService = new LocalStorageService();
  }

  get counter() {
    let counter = this.localStorageService.getItem(COUNTER_KEY) || {};

    var today = new Date().toLocaleDateString();
    if (today !== counter.date) {
      counter.date = today;
      counter.value = 0;
      this.counter = counter;
    }

    return counter;
  }

  set counter(counter) {
    this.localStorageService.setItem(COUNTER_KEY, counter);
  }


}
