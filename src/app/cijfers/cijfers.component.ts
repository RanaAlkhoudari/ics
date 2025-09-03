import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LiquiditySolvencyTableComponent} from '../liquidity-solvency-table/liquidity-solvency-table.component';

@Component({
  selector: 'app-cijfers',
  standalone: true,
  imports: [CommonModule, LiquiditySolvencyTableComponent],
  templateUrl: './cijfers.component.html',
  styleUrl: './cijfers.component.scss'
})
export class CijfersComponent {
  constructor(private router: Router) {}

  onNext() {
    // Extend this to navigate to another page or show confirmation
    console.log('Next clicked');
  }

  onBack() {
    // Navigate back to the document upload page
    this.router.navigate(['/upload']);
  }
}

