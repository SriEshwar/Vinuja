// Implement the BankAccount interface in a class
var Account = /** @class */ (function () {
    function Account(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, " into ").concat(this.name, "'s account."));
    };
    Account.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, " from ").concat(this.name, "'s account."));
        }
        else {
            console.log("Insufficient funds for ".concat(this.name, " to withdraw ").concat(amount, "."));
        }
    };
    Account.prototype.display = function () {
        console.log("Account owner: ".concat(this.name, ", Balance: ").concat(this.balance));
    };
    return Account;
}());
// Create an instance of Account
var VinujaAccount = new Account("Vinuja", 2000);
VinujaAccount.display();
VinujaAccount.deposit(500);
VinujaAccount.display();
VinujaAccount.withdraw(200);
VinujaAccount.display();
