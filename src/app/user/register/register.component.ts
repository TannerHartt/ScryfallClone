import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService, private router: Router) { }

  email: FormControl = new FormControl<String>('', [Validators.email, Validators.required, Validators.minLength(6)]);
  password: FormControl = new FormControl<String>('', [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);
  username: FormControl = new FormControl<String>('', [Validators.required, Validators.minLength(5)]);

  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
    username: this.username
  });


  async register() {
    console.log(this.registerForm);
    try {
      // Calls the firebase provided create user function and passes in the values entered by the user in the register form.
      await this.auth.createUser(this.registerForm.value as User)
        .then(() => {
          setTimeout(() => {
            this.router.navigate(['/login'])
              .then(() => {
                window.location.reload();
              });
          }, 1000);
        });
    } catch (e) { // If an error occurs, display relevant info to the user indicating an error occurred.
      console.log(e);
      return; // End function compilation and return.
    }
  }

}
