import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  // TODO continue login work and login page template.
  // TODO create initialize firebase into project and make connection.
  ngOnInit(): void {
  }

}
