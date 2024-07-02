package Abstraction;

abstract class BankAccount {
    double balance;
    BankAccount(double balance){
        this.balance=balance;
    }

    public abstract void withdraw(double amount);
    public abstract void deposit(double amount);

    public double checkBalance(){
        return balance;
    }
}

class SavingAccount extends BankAccount {
    SavingAccount(double balance){
        super(balance);
    }

    @Override
    public  void withdraw(double amount){
         if(amount<=balance){
            balance-=amount;
            System.out.println("Withdrew " + amount + " from Savings Account");
         }else{
            System.out.println("Insufficient");
         }
    }
    public  void deposit(double amount){
        balance+=amount;
        System.out.println("Deposited " + amount + " to Savings Account");
    }
}

class CheckingAccount extends BankAccount {
    public CheckingAccount(double balance) {
        super(balance);
    }

    @Override
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited " + amount + " to Checking Account");
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from Checking Account");
        } else {
            System.out.println("Insufficient funds");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount savingAccount=new SavingAccount(1000);
        BankAccount checkingAccount=new CheckingAccount(2000);
        savingAccount.deposit(2000);
        savingAccount.withdraw(100);
        System.out.println("Saving Account Details:"+ savingAccount.checkBalance());

        checkingAccount.deposit(4000);
        checkingAccount.withdraw(200);
        System.out.println("Checking Account Details:"+ checkingAccount.checkBalance());

    }
}
