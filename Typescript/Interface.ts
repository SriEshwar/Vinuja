// Define the BankAccount interface
interface BankAccount {
    name: string;
    balance: number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    display(): void;
}

// Implement the BankAccount interface in a class
class Account implements BankAccount {
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.name}'s account.`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.name}'s account.`);
        } else {
            console.log(`Insufficient funds for ${this.name} to withdraw ${amount}.`);
        }
    }

    display(): void {
        console.log(`Account owner: ${this.name}, Balance: ${this.balance}`);
    }
}

// Create an instance of Account
let VinujaAccount: BankAccount = new Account("Vinuja", 2000);

VinujaAccount.display();   
VinujaAccount.deposit(500); 
VinujaAccount.display();   
VinujaAccount.withdraw(200); 
VinujaAccount.display();   