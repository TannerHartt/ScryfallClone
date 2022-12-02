import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  credentials = {
    email: '',
    password: '',
  }

  async login() {
    try {
      console.log(this.credentials)
      // Calls the firebase provided sign in method and passes in the user credentials to check if they are registered.
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password);
    } catch (e) { // If an error occurs... ==>
      alert('Login Error, please try again.');
      return // Ends the login attempt and returns from the function.
    }

    setTimeout(() => {
      this.router.navigate(['/settings']).then(() => {
        window.location.reload();
      });
    }, 1000);



  }
}
