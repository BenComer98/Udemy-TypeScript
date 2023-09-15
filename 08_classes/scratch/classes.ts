class Vehicle {
  private color: string

  public constructor(color: string) {
    this.color = color;
  }

  public unlock(): void {
    console.log('click click');
    console.log(`The ${this.color} car unlocks.`);
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // Calls the parent's constructor
  }

  private drive(): void {
    console.log('vroom');
  }

  turnOn(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
vehicle.unlock();

const car = new Car(4, 'green');
car.unlock();
car.turnOn();