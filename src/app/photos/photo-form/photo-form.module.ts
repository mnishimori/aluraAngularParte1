import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class PhotoFormModule { }
