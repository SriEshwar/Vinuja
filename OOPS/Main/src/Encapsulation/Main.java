public class BankAccount {
    // Private data member, hidden from outside access
    private double balance;

    // Constructor to initialize the balance
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    // Public method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    // Public method to withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else {
            System.out.println("Invalid or insufficient funds for withdrawal");
        }
    }

    // Public method to check the balance
    public double getBalance() {
        return balance;
    }
}

// Main class 
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);

        // Interacting with the account through its public methods
        account.deposit(200);
        account.withdraw(150);
        System.out.println("Current balance: " + account.getBalance());

    }
}

