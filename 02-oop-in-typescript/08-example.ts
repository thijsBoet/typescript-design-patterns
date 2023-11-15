class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ){}
  display(): void {
    console.log(`ID: ${this.id} Name: ${this.name} Price: $${this.price}.`);
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public author: string,
    public title: string
  ){
    super(id, name, price);
  }
  
  display(): void   {
    super.display();
    console.log(`Book - Author: ${this.author}, Title: ${this.title}.`);
  }
}

class Electronics extends Product {
  constructor(public id: string, public name: string, public price: number, public brand: string, public model: string) {
    super(id, name, price);
  }
  
  display(): void {
    super.display();
    console.log(`Electronics - Brand: ${this.brand}, - $${this.price} - ${this.brand} - ${this.model}`);
  }
}

let myBook = new Book("1", "The Hobbit", 9.99, "J.R.R. Tolkien", "The Hobbit");
let myElectronics = new Electronics("2", "iPhone 6", 699.99, "Apple", "iPhone 6");

myBook.display();
myElectronics.display();