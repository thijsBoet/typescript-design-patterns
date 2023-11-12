// POLYMORPHISM - many forms (many shapes) - same interface

// Shapes (Rectangle, Square, Circle)
// Aria, Perimeter
// simple - single function calculateTotalArea

// POLYMORPHISM different types of objects can be used interchangeably if they share a common interface. This promotes flexibility and code reuse.
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) { }
  
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) { }
  
  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}