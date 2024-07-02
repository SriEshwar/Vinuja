class BankAccount{
    protected String accountNumber;
    protected double balance;

    public BankAccount(String accountNumber,double balance){
          this.accountNumber=accountNumber;
          this.balance=balance;
    }

    public void deposit(double amount){
          balance+=amount;
          System.out.println("Deposited "+ amount + "New balance: "+balance);
    }
    public void withdraw(double amount){
        if(amount<=balance){
            balance-=amount;
           
                System.out.println("withdraw "+amount+ "new balance "+balance);
            }
            else{
                System.out.println("Insufficient funds");
            }
        }
        public double checkBalance(){
            return balance;
        }
    }

    class SavingsAccount extends BankAccount{
        private double interestRate;
        public SavingsAccount(String accountNumber, double balance, double interestRate) {
            super(accountNumber, balance);
            this.interestRate = interestRate;
        }
        public void addInterest() {
            double interest = balance * interestRate / 100;
            balance += interest;
            System.out.println("Added interest " + interest + ". New balance: " + balance);
        }
    }




public class main {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount("SA123", 1000, 5);
        savingsAccount.deposit(500);
        savingsAccount.withdraw(300);
        savingsAccount.addInterest();
        System.out.println("Savings Account Balance: " + savingsAccount.checkBalance());
    }
}
