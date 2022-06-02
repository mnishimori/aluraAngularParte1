import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';


@Component({
  // selector: 'app-signin', -> o selector deste componente pode ser omitido, porque ele não será utilizado em um template de outro componente.
  templateUrl: './signin.component.html'
  // styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private form: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute
      .queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);

    this.loginForm = this.form.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          this.fromUrl
            ? this.router.navigateByUrl(this.fromUrl)
            : this.router.navigate(['user', userName]);
        },
        error => {
          console.log(error);
          this.loginForm.reset();
          this.userNameInput.nativeElement.focus();
        });
  }
}

