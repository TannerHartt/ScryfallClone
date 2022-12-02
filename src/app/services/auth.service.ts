import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private router: Router) {
    this.userCollection = db.collection('users');
  }

  public async createUser(userData: User) {
    if(!userData.password) {
      throw new Error('Password not provided'); // Throw error if the user did not enter a password when registering.
    }

    // Make a call to the firebase function to create a user with the email and password they entered.
    const userCreds = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password);

    if(!userCreds.user) {
      throw new Error('User not found!'); // Throws an error if the user was not correctly created / is null.
    }

    // Sets the unique data entered by the user to their account / profile information.
    await this.userCollection.doc(userCreds.user.uid).set({
      email: userData.email, // User email.
      password: userData.password,
      username: userData.username
    });

    // Gives the user a unique display name property to refer to the account as.
    await userCreds.user.updateProfile({
      displayName: userData.username,
    });
  }

  public async logout($event?: Event) {
    if($event) { // If an event happens, prevent the default browser behavior of refreshing the page.
      $event.preventDefault();
    }
    await this.auth.signOut();// Call the firebase given sign out method

    // Reload the page to update the UI.
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
