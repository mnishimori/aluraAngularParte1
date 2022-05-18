import { AlertService } from './../../shared/components/alert/alert.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photoId: number;
  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  removePhoto() {
    this.photoService.removePhoto(this.photoId)
    .subscribe(() => {
      this.alertService.success("Photo removed!");
      this.router.navigate(['']);
    }, err => {
      console.log(err);
      this.alertService.warning("Could not delete the photo");
    })
  }

}
