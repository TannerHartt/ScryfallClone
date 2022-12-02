import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  credentials = {
    email: '',
    password: '',
  }

  ngOnInit(): void {
  }


  async login() {
    try {
      console.log(this.credentials)
      // Calls the firebase provided sign in method and passes in the user credentials to check if they are registered.
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password);
    } catch (e) { // If an error occurs... ==>
      return // Ends the login attempt and returns from the function.
    }

  }
}
