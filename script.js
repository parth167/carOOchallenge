//part one

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return 'Beep';
  }
  toString() {
    return `the vehicle is a ${this.make}${this.model}from${this.year}`;
  }
}
//let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
//myFirstVehicle.honk(); // "Beep."

//part 2

// for car
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

//part 3

//for Motercycle
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return 'VROOM VROOM!!!';
  }
}
// let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

// myFirstMotorcycle.toString();
// // "The vehicle is a Honda Nighthawk from 2000."

// myFirstMotorcycle.honk(); // "Beep."
// myFirstMotorcycle.revEngine(); // "VROOM!!!"
// myFirstMotorcycle.numWheels; //2
