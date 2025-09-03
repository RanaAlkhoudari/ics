import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-company-info',
  imports: [ReactiveFormsModule],
  templateUrl: './client-company-info.component.html',
  styleUrl: './client-company-info.component.scss'
})
export class ClientCompanyInfoComponent {
  clientCompanyForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clientCompanyForm = this.fb.group({
      clientName: ['', Validators.required],
      companyName: ['', Validators.required],
      kvkNumber: ['', Validators.required],
      registrationDate: ['', Validators.required],
      legalForm: ['', Validators.required],
      sbiCode: ['', Validators.required]
    });
  }

  onNext() {
    if (this.clientCompanyForm.valid) {
      // Navigate to document upload page
      this.router.navigate(['/upload']);
    }
  }
}
