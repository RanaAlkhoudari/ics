import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquiditySolvencyTableComponent } from './liquidity-solvency-table.component';

describe('LiquiditySolvencyTableComponent', () => {
  let component: LiquiditySolvencyTableComponent;
  let fixture: ComponentFixture<LiquiditySolvencyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquiditySolvencyTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquiditySolvencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
