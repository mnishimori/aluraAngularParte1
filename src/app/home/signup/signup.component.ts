import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NewUser } from './new-user';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignupService } from './signup.service';
import { userNamePassword } from './username-password.validator';

@Component({
  // selector: 'app-signup', o selector deste componente pode ser omitido, porque ele não será utilizado em um template de outro componente.
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    }, {
      validator: userNamePassword
    });
  }

  signUp(){
    const newUser = this.signupForm.getRawValue() as NewUser;

    console.log(newUser);

    this.signUpService.signUp(newUser)
      .subscribe(
        user => this.router.navigate(['']),
        err => console.log(err))
  }

}
