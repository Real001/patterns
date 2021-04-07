interface ICar {
  price: number;
  feature: string;
}

class Car implements ICar {
  private _price = 10000;
  private _feature = 'Car with';

  get price () {
    return this._price;
  }

  get feature() {
    return this._feature;
  }

}

class Parktronic implements ICar {
  private car: ICar;
  constructor(car: ICar) {
    this.car = car;
  }

  get price() {
    return this.car.price + 1000;
  }

  get feature() {
    return this.car.feature + ' parktronic';
  }
}

class HeadlightWasher implements ICar {
  private car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }

  get price() {
    return this.car.price + 2000;
  }

  get feature() {
    return this.car.feature + ' headlight washer';
  }
}

const standardCar = new Car();
console.log(standardCar.price, standardCar.feature);
const comfortCar = new Parktronic(standardCar);
console.log(comfortCar.price, comfortCar.feature);
const luxeCar = new HeadlightWasher(comfortCar);
console.log(luxeCar.price, luxeCar.feature)
