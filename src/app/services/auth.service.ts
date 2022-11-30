import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {
    this.userCollection = db.collection('users');
  }



  public async logout($event?: Event) {
    if($event) { // If an event happens, prevent the default browser behavior of refreshing the page.
      $event.preventDefault();
    }
    await this.auth.signOut(); // Call the firebase given sign out method

  }
}
