import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss'
})
export class DocumentUploadComponent {
  uploadForm: FormGroup;
  uploadedFiles: File[] = [];
  uploadedJaarrekening: File | null = null;
  isProcessing = false; // Flag to control spinner visibility

  constructor(private fb: FormBuilder, private router: Router) {
    this.uploadForm = this.fb.group({
      documents: [null],
      jaarrekening: [null]
    });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedFiles = Array.from(event.target.files);
      this.uploadForm.patchValue({ documents: this.uploadedFiles });
    }
  }

  onJaarrekeningChange(event: any) {
    if (event.target.files?.length) {
      this.uploadedJaarrekening = event.target.files[0];
      this.uploadForm.patchValue({ jaarrekening: this.uploadedJaarrekening });
    }
  }

  onNext() {
    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.router.navigate(['/cijfers']);
    }, 10000); // 10 seconds delay
  }

  onBack() {
    // Navigate back to the first page
    this.router.navigate(['/']);
  }
}
