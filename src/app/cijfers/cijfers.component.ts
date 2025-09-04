import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LiquiditySolvencyTableComponent} from '../liquidity-solvency-table/liquidity-solvency-table.component';

@Component({
  selector: 'app-cijfers',
  standalone: true,
  imports: [CommonModule, FormsModule, LiquiditySolvencyTableComponent],
  templateUrl: './cijfers.component.html',
  styleUrl: './cijfers.component.scss'
})
export class CijfersComponent {
  constructor(private router: Router) {
    this.activaFields.forEach(field => {
      this.activaValues[field.key] = {};
      this.fiscalYears.forEach(year => {
        this.activaValues[field.key][year] = null;
      });
    });

    // Initialize values for Passiva
    this.passivaFields.forEach(field => {
      this.passivaValues[field.key] = {};
      this.fiscalYears.forEach(year => {
        this.passivaValues[field.key][year] = null;
      });
    });

    // Initialize values for Resultatenrekening
    this.resultatenrekeningFields.forEach(field => {
      this.resultatenrekeningValues[field.key] = {};
      this.fiscalYears.forEach(year => {
        this.resultatenrekeningValues[field.key][year] = null;
      });
    });
  }

  protected fiscalYears: string[] = ['2023', '2024'];

  activaFields = [
    { label: 'Immateriële vaste activa', key: 'immateriele' },
    { label: 'Machines en installaties', key: 'machines' },
    { label: 'Auto\'s en overige transportmiddelen', key: 'autos' },
    { label: 'Totaal materiële vaste activa', key: 'totaalMateriele' },
    { label: 'Vorderingen en overlopende activa', key: 'vorderingenOverlopende' },
    { label: 'Vorderingen op handelsdebiteuren', key: 'vorderingenHandelsdebiteuren' },
    { label: 'Overige vorderingen', key: 'overigeVorderingen' },
    { label: 'Totaal vorderingen', key: 'totaalVorderingen' },
    { label: 'Effecten en liquide middelen', key: 'effectenLiquide' },
    { label: 'Banktegoeden', key: 'banktegoeden' },
    { label: 'Totaal effecten en liquide middelen', key: 'totaalEffecten' },
    { label: 'Totaal activa', key: 'totaalActiva' }
  ];

  passivaFields = [
    { label: 'Ondernemingsvermogen', key: 'ondernemingsvermogen' },
    { label: 'Eigen vermogen/Fiscaal ondernemingsvermogen', key: 'eigenVermogen' },
    { label: 'Kortlopende schulden', key: 'kortlopendeSchulden' },
    { label: 'Schulden aan leveranciers en handelskredieten', key: 'schuldenLeveranciers' },
    { label: 'Verschuldigde omzetbelasting', key: 'verschuldigdeOmzetbelasting' },
    { label: 'Totaal kortlopende schulden', key: 'totaalKortlopendeSchulden' },
    { label: 'Totaal passiva', key: 'totaalPassiva' }
  ];

  resultatenrekeningFields = [
    { label: 'Opbrengsten', key: 'opbrengsten' },
    { label: 'Netto-omzet', key: 'nettoOmzet' },
    { label: 'Som van de bedrijfsopbrengsten', key: 'somBedrijfsopbrengsten' },
    { label: 'Kosten van grond- en hulpstoffen, uitbesteed werk e.d.', key: 'kostenGrondHulpstoffenUitbesteed' },
    { label: 'Kosten van grond- en hulpstoffen, inkoopprijs van de verkopen', key: 'kostenGrondHulpstoffenInkoop' },
    { label: 'Totaal kosten van grond- en hulpstoffen, uitbesteed werk e.d.', key: 'totaalKostenGrondHulpstoffenUitbesteed' },
    { label: 'Afschrijvingen', key: 'afschrijvingen' },
    { label: 'Afschrijving auto\'s en overige transportmiddelen', key: 'afschrijvingAutos' },
    { label: 'Totaal afschrijvingen', key: 'totaalAfschrijvingen' },
    { label: 'Overige bedrijfskosten', key: 'overigeBedrijfskosten' },
    { label: 'Autokosten en transportkosten', key: 'autokostenTransportkosten' },
    { label: 'Verkoopkosten', key: 'verkoopkosten' },
    { label: 'Andere kosten', key: 'andereKosten' },
    { label: 'Totaal overige bedrijfskosten', key: 'totaalOverigeBedrijfskosten' },
    { label: 'Financiële baten en lasten', key: 'financieleBatenLasten' },
    { label: 'Opbrengst van overige vorderingen', key: 'opbrengstOverigeVorderingen' },
    { label: 'Kosten van schulden, andere rentelasten en kosten', key: 'kostenSchulden' },
    { label: 'Totaal financiële baten en lasten', key: 'totaalFinancieleBatenLasten' },
    { label: 'Winstberekening', key: 'winstberekening' },
    { label: 'Opbrengsten', key: 'opbrengstenWinst' },
    { label: 'Kosten', key: 'kostenWinst' },
    { label: 'Financiële baten en lasten', key: 'financieleBatenLastenWinst' },
    { label: 'Saldo winstberekening', key: 'saldoWinstberekening' }
  ];

  activaValues: { [key: string]: { [year: string]: number | null } } = {};
  passivaValues: { [key: string]: { [year: string]: number | null } } = {};
  resultatenrekeningValues: { [key: string]: { [year: string]: number | null } } = {};


  onNext() {
    // Extend this to navigate to another page or show confirmation
    console.log('Next clicked');
  }

  onBack() {
    // Navigate back to the document upload page
    this.router.navigate(['/upload']);
  }
}
