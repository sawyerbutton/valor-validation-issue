import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const pwdValidator: ValidatorFn = (fg: FormGroup) => {
  const newPassword = fg.get('password');
  const confirmPassword = fg.get('confirmPassword');
  return newPassword.value === confirmPassword.value
    ? null
    : { pwdNotSame: true };
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signUpFormGroup = new FormGroup(
    {
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    pwdValidator.bind(this)
  );
}
