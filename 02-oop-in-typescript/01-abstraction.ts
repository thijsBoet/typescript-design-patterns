// ABSTRACTION is simplifying complex things by focusing on what's important, while ignoring unnecessary details. => hide the details and show the essentials

// Shapes (Rectangle, Square, Circle)
// Aria, Perimeter
// simple - single function calculateTotalArea

// Interface is the abstraction of the last 4 lines of code
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

function calculateTotalArea(shape:Shape) {
  return shape.area();
}

// Client code
const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);

console.log("Area of circle: ",calculateTotalArea(circle));
console.log("Area of rectangle: ",calculateTotalArea( rectangle));