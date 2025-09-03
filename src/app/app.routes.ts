import { Routes } from '@angular/router';
import { ClientCompanyInfoComponent } from './client-company-info/client-company-info.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { CijfersComponent } from './cijfers/cijfers.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientCompanyInfoComponent
  },
  {
    path: 'upload',
    component: DocumentUploadComponent
  },
  {
    path: 'cijfers',
    component: CijfersComponent
  }
];
