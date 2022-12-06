class Iphone {
  constructor() {
    this.color = "white";
    this.yearOfCreation = "2019";
    this.memory = 64;
    this.brand = "Apple";
  }
}

class Samsung {
  constructor() {
    this.color = "gray";
    this.yearOfCreation = "2018";
    this.memory = 128;
    this.brand = "Samsung";
  }
}

class Xiaomi {
  constructor() {
    this.color = "green";
    this.yearOfCreation = "2020";
    this.memory = 256;
    this.brand = "Xiaomi";
  }
}

class Phone {
  constructor(yearOfCreation, memory, color) {
    this.color = color;
    this.yearOfCreation = yearOfCreation;
    this.memory = memory;
  }
}
class Iphone extends Phone {
  constructor(yearOfCreation, memory, color) {
    super(yearOfCreation, memory, color);

    this.brand = "Apple";
  }
}

class Samsung extends Phone {
  constructor(yearOfCreation, memory, color) {
    super(yearOfCreation, memory, color);

    this.brand = "Samsung";
  }
}

class Xiaomi extends Phone {
  constructor(yearOfCreation, memory, color) {
    super(yearOfCreation, memory, color);

    this.brand = "Xiaomi";
  }
}

const iphone = new Iphone(2019, 64, "white");
console.log(iPhone);

const samsung = new Samsung(2020, 128, "grey");
console.log(samsung);

const xiaomi = new Xiaomi(2021, 256, "green");
console.log(xiaomi);
