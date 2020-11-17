import beerApiUrl from './api-url';

export default class BeerService {

  getData() {
    fetch(beerApiUrl)
      .then(response => response.json())
      .then(data => {

      })
      .catch(error => {
        console.error(error.message);
      })
  }

}