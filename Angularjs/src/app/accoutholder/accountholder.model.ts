export class Accountholder {
    accountNumber: number;
    acHolderName: string;
    typeOfAccount: string;
    amount: number;
    date: string; 
    bankName: string;

    constructor(accountNumber: number, acHolderName: string, typeOfAccount: string, amount: number, date: string, bankName: string) {
        this.accountNumber = accountNumber;
        this.acHolderName = acHolderName;
        this.typeOfAccount = typeOfAccount;
        this.amount = amount;
        this.date = date;
        this.bankName = bankName;
    }
}