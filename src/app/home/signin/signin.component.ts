import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../core/auth.service';


@Component({
  // selector: 'app-signin', -> o selector deste componente pode ser omitido, porque ele não será utilizado em um template de outro componente.
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private form: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log('vai se autenticar');
  }

}
