import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-liquidity-solvency-table',
  imports: [
    NgForOf
  ],
  templateUrl: './liquidity-solvency-table.component.html',
  styleUrl: './liquidity-solvency-table.component.scss'
})
export class LiquiditySolvencyTableComponent {
  protected fiscalYears: string[] = ['2022', '2023'];

  // Define solvency/liquidity fields
  fields = [
    { label: 'Current Ratio', key: 'currentRatio' },
    { label: 'Quick Ratio', key: 'quickRatio' },
    { label: 'Solvency Ratio', key: 'solvencyRatio' },
    { label: 'Debt Ratio', key: 'debtRatio' }
  ];

  // Store values for each field and year
  values: { [key: string]: { [year: string]: number } } = {};

  constructor() {
    this.fields.forEach(field => {
      this.values[field.key] = {};
      this.fiscalYears.forEach(year => {
        this.values[field.key][year] = this.getRandomValue();
      });
    });
  }

  private getRandomValue(): number {
    return Math.floor(Math.random() * (120000 - 200 + 1)) + 200;
  }
}
