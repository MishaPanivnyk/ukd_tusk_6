// Методи для обчислення віку і вартості телефону
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

  calculatePrice() {
    return (this.yearOfCreation * this.memory) / 1000;
  }

  calculateAge() {
    return 2022 - this.yearOfCreation;
  }
  getDescription() {
    return `The ${
      this.brand
    } is ${iPhone.calculateAge()} year old  and costs ${iPhone.calculatePrice(
      true
    )}$`;
  }
}

class Samsung extends Phone {
  constructor(yearOfCreation, memory, color) {
    super(yearOfCreation, memory, color);

    this.brand = "Samsung";
  }

  calculatePrice() {
    return (this.yearOfCreation * this.memory) / 1000;
  }
  calculateAge() {
    return 2022 - this.yearOfCreation;
  }
  getDescription() {
    return `The ${
      this.brand
    } is ${samsung.calculateAge()} years old  and costs ${samsung.calculatePrice(
      true
    )}$`;
  }
}

class Xiaomi extends Phone {
  constructor(yearOfCreation, memory, color) {
    super(yearOfCreation, memory, color);

    this.brand = "Xiaomi";
  }

  calculatePrice() {
    return (this.yearOfCreation * this.memory) / 1000;
  }
  calculateAge() {
    return 2022 - this.yearOfCreation;
  }
  getDescription() {
    return `The ${
      this.brand
    } is ${xiaomi.calculateAge()} years old  and costs ${xiaomi.calculatePrice(
      true
    )}$`;
  }
}

const iPhone = new Iphone(2021, 524, "white");
console.log(iPhone.getDescription());

const samsung = new Samsung(2020, 128, "grey");
console.log(samsung.getDescription());

const xiaomi = new Xiaomi(2018, 256, "green");
console.log(xiaomi.getDescription());

////*
class Phone {
  constructor(brand, yearOfCreation, color, memory) {
    this.color = color;
    this.yearOfCreation = yearOfCreation;
    this.memory = memory;
    this.brand = brand;
  }
  //модель
  get brand() {
    this._brand = brand;
  }
  set brand(brand) {
    this._brand = "Apple";
  }
  //рік
  get yearOfCreation() {
    this._yearOfCreation = yearOfCreation;
  }
  set yearOfCreation(yearOfCreation) {
    this._yearOfCreation = 2020;
  }
  //колір
  get color() {
    this._color = color;
  }
  set color(color) {
    this._color = "pink";
  }
  //пам'ять
  get memory() {
    this._memory = memory;
  }
  set memory(memory) {
    this._memory = 256;
  }
}
let phone = new Phone();
console.log(phone);
