class BuildFurniture {
  callMeasurer() {
    console.log('Call the measurer');
  }

  getSize() {
    console.log('Take measurements');
  }

  design() {
    console.log('Design');
  };

  order() {
    console.log('Ordering materials');
  }

  develop() {
    console.log('Develop');
  }

  installation() {
    console.log('Installation');
  }
}

class FacadeBuildFurniture {
  private buildFurniture: BuildFurniture;

  constructor() {
    this.buildFurniture = new BuildFurniture();
  }

  orderFurniture() {
    this.buildFurniture.callMeasurer();
    this.buildFurniture.getSize();
    this.buildFurniture.design();
    this.buildFurniture.order();
    this.buildFurniture.develop();
    this.buildFurniture.installation();
  }
}

const facade = new FacadeBuildFurniture();
facade.orderFurniture();