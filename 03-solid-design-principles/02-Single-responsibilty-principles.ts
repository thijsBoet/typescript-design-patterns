// Single Responsibility Principle: Each class or module should have a single responsibility.
class User {
  constructor( public name: string, public  email: string) { }

  // Single Responsibility Principle Violation
  // UserAuthentication(): void {}
}

class UserAuthentication {
  constructor(user: User) { }
  
  authenticate(password: string): void {
    // implement logic here
  }
}