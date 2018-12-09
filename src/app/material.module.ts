import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatDialogModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatDialogModule
    ],
})
export class MaterialModule { }