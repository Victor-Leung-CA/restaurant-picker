import Response from './response';

export default class GetRestaurant {
  constructor() {
    this.results = [];
    this.castedNumbers = [];

    Response.businesses.map((item) => {
      let result = {
        name: item.name,
        rating: item.rating,
        phone: item.phone,
        is_closed: item.is_closed,
        location: item.location.address1,
        url: item.url,
        image_url: item.image_url,
      };
      this.results.push(result);
      return 1;
    });

    this.size = this.results.length;
  }

  getRandInt() {
    var randNum = Math.floor(Math.random() * this.size);
    if (!this.castedNumbers.includes(randNum)) {
      this.castedNumbers.push(randNum);
      return randNum;
    } else {
      return this.getRandInt();
    }
  }
}
