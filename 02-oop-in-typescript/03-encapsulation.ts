// Encapsulation is the packing of data and functions into a single component.

// BankAccount
// public => Deposit
// public => Withdrawing
// Encapsulated => private => Balance

class BankAccount {
  // private => encapsulation
  private _balance: number = 0;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter
  get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if(amount < 0) throw new Error("Amount has to be greater than 0");
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) throw new Error("Amount has to be greater than 0");
    if (amount > this._balance) throw new Error("Insufficient funds");
    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(100);
myAccount.withdraw(500);

console.log(myAccount.balance);
