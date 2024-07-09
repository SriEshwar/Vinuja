import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  shoeNames = ['Brogue', 'Chukka Boot', 'Oxford', 'Loafer', 'Monk Strap', 'Derby'];
  sizes = [6, 7, 8, 9, 10];
  colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'];
  priceRanges = [
    { label: '1000 to 2000', range: [1000, 2000] },
    { label: '2000 to 3000', range: [2000, 3000] },
    { label: '3000 to 4000', range: [3000, 4000] }
  ];

  selectedNames = new Set<string>();
  selectedSizes = new Set<number>();
  selectedColors = new Set<string>();
  selectedPriceRanges = new Set<any>();

  onNameChange(event: any) {
    this.updateSelectedItems(this.selectedNames, event.target.value, event.target.checked);
  }

  onSizeChange(event: any) {
    this.updateSelectedItems(this.selectedSizes, event.target.value, event.target.checked);
  }

  onColorChange(event: any) {
    this.updateSelectedItems(this.selectedColors, event.target.value, event.target.checked);
  }

  onPriceChange(event: any) {
    const priceRange = this.priceRanges.find(pr => pr.label === event.target.value);
    if (priceRange) {
      this.updateSelectedItems(this.selectedPriceRanges, priceRange, event.target.checked);
    }
  }

  updateSelectedItems(set: Set<any>, value: any, checked: boolean) {
    if (checked) {
      set.add(value);
    } else {
      set.delete(value);
    }
    this.emitFilters();
  }

  emitFilters() {
    this.filtersChanged.emit({
      names: Array.from(this.selectedNames),
      sizes: Array.from(this.selectedSizes),
      colors: Array.from(this.selectedColors),
      priceRanges: Array.from(this.selectedPriceRanges)
    });
  }
}

