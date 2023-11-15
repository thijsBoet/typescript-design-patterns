// INHERITANCE lets one class inherit features from another, enabling code reuse and creating class hierarchies.

class Animal {
  constructor(public name: string) {

  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(name: string = "dog") {
    super(name);
  }
}

let myDog = new Dog("Bobby the Dog");
myDog.move(10);