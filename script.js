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
