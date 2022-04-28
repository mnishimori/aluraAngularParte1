import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';

import { PhotoListComponent } from './photo-list.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoListComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
  ]
})
export class PhotoListModule { }
