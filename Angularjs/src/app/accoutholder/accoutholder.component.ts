

import { Component } from '@angular/core';
import { Accountholder } from './accountholder.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountholderComponent {
  accountTypes: string[] = ['All', 'Savings', 'BusinessAccount', 'SalaryAccount'];
  selectedAccountType: string = 'All';

  accountholders: Accountholder[] = [
    new Accountholder(123456789, "Jana", "Savings", 10000.0, "2024-05-15", "Canara-Bank"),
    new Accountholder(987654321, "Ram", "BusinessAccount", 20000.0, "2024-05-16", "SBI"),
    new Accountholder(987994321, "Nandhini", "SalaryAccount", 40000.0, "2024-08-16", "IndianOverseasBank"),
    new Accountholder(123456089, "Prakash", "Savings", 15000.0, "2024-06-15", "Canara-Bank"),
    new Accountholder(987654356, "Vanitha", "BusinessAccount", 12000.0, "2024-07-16", "SBI"),
    new Accountholder(987654334, "Kishore", "SalaryAccount", 4000.0, "2024-04-16", "IndianOverseasBank"),
    new Accountholder(987654390, "Vinuja", "SalaryAccount", 700.0, "2024-09-16", "IndianOverseasBank"),

  ];

  get filteredAccountholders(): Accountholder[] {
    if (this.selectedAccountType === 'All') {
      return this.accountholders;
    } else {
      return this.accountholders.filter(holder => holder.typeOfAccount === this.selectedAccountType);
    }
  }

  trackByAccountNumber(index: number, accountholder: Accountholder): number {
    return accountholder.accountNumber;
  }

  getStatus(amount: number): string {
    if (amount >= 500 && amount < 1000) {
      return 'Inactive';
    } else if (amount >= 1000 && amount < 10000) {
      return 'Active';
    } else if (amount >= 10000) {
      return 'Loyal';
    } else {
      return '';
    }
  }
}