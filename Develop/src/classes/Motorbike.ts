// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TD: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of Motorbike class
   // properties should include vin, color, make, model, year, weight, top speed, and wheels
  // types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];

  //  constructor should accept the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Cconstructor should call the constructor of the parent class, Vehicle
    super();
  // constructor should initialize properties of the Motorbike class
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;

  // Check if the wheels array has 2 elements
  // If not, create 2 new Wheel objects
  // Otherwise, use the provided wheels array
  if (wheels.length !== 2) {
    this.wheels = [new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
}

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Motorbike class
    console.log(`VIN: ${this.vin}`);
   
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as default 
export default Motorbike;
