// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class should extend the Vehicle class and implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{ 
  // Declare properties of the Truck class
  // Properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // Types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {

    // The constructor should call the constructor of the parent class, Vehicle
    super();

    // The constructor should initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = 
    wheels.length === 4 
    ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

// Need to Implement the tow method from the AbleToTow interface
tow(vehicle: Truck | Motorbike | Car): void {
  // Need to get the make, model, weight of the vehicle if it exists
  // Check if the vehicle's weight is less than or equal to the truck's towing capacity
  // If it is, log that the vehicle is being towed
  // If it is not, log that the vehicle is too heavy to be towed
  const { make, model, weight } = vehicle;
  if (weight <= this.towingCapacity) {
    console.log(`Towing ${make} ${model}`);
  } else {
    console.log(`${make} ${model} is too heavy to be towed`);
  }
}
}

// Export the Truck class as the default export
export default Truck;