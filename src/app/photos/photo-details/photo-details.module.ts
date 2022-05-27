import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';


@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  imports: [
    CommonModule,
    PhotoModule,
    ReactiveFormsModule,
    VmessageModule,
    ShowIfLoggedModule
  ]
})
export class PhotoDetailsModule { }
