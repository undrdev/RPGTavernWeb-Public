import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase  from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; //Save Logged in user data
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone //ngZone service to remove outside scope warning
  ) {
    //saving user data in local storage when loggen in
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }
      else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  //Sign in with Google
  GoogleAuth(){
    return this.AuthLogin( new firebase.auth.GoogleAuthProvider());
  }

  FacebookAuth(){
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider())
  }

  TwitterAuth(){
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider())
  }

  //Auth Logic to run auth providers
  AuthLogin (provider){
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(()=> {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
      }).catch((error)=> {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    return userRef.set(userData, {
      merge: true
    });
  }

  //Sign out
  SignOut(){
    return this.afAuth.signOut()
      .then(()=> {
        this.userData = null;
        localStorage.removeItem('user');
        this.router.navigate(['/quick-encounter']);
      })
  }

}
