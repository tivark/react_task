import {beerApiUrl} from './api-url';

export default class BeerService {

  async getData() {
    const response = await fetch(beerApiUrl);
    const data = await response.json();
    return data;
  }

}