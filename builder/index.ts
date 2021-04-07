class Pizza {
  public tomato: boolean;
  public chez: boolean;
  public thinCrust: boolean;
  public chicken: boolean;
  public salts: boolean;
  public pineapple: boolean;

  constructor() {
    this.tomato = false;
    this.chez = true;
    this.thinCrust = false;
    this.chicken = false;
    this.salts = false;
    this.pineapple = false;
  }
}

class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  addTomato(isTomato: boolean) {
    this.pizza.tomato = isTomato;
    return this;
  }

  addChez(isChez: boolean) {
    this.pizza.chez = isChez
    return this;
  }

  addThinCrust(isThinCrust: boolean) {
    this.pizza.thinCrust = isThinCrust;
    return this;
  }

  addChicken(isChicken: boolean) {
    this.pizza.chicken = isChicken;
    return this;
  }

  addSalts(isSalts: boolean) {
    this.pizza.salts = isSalts;
    return this;
  }

  addPineapple(isPineapple: boolean) {
    this.pizza.pineapple = isPineapple;
    return this;
  }

  done() {
    return this.pizza;
  }
}

class PizzaDirector {
  private pizzaBuilder: PizzaBuilder;

  constructor() {
    this.pizzaBuilder = new PizzaBuilder();
  }

  hawaiian() {
    this.pizzaBuilder.addChicken(true).addPineapple(true);
    return this.pizzaBuilder.done();
  }

}

console.log(new PizzaDirector().hawaiian())