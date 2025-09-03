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

  protected fiscalYears: string[] = ['2022', '2023', '2024'];

}
