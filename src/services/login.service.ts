import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { MyApp } from '../app/app.component';

//import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {
  usuario: any = {};

  isLogued;
  constructor(private afAuth: AngularFireAuth, private appCtrl: App) {
    if (localStorage.getItem('usuario')) {
      //usuario logueado
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.isLogued = true;
    } else {
      this.usuario = null;
      this.isLogued = false;
    }
    console.log(this.usuario);
  }
  logIn() {
    // Start a sign in process for an unauthenticated user.
  return Observable.from(  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
      this.usuario = data;
      localStorage.setItem('usuario', JSON.stringify(data))
      this.isLogued = true;
      this.appCtrl.getRootNav().setRoot(MyApp);
      let user = this.usuario.user;
      this.writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      this.generateFriendList(user.uid);
    }));

  }
  logOut() {
    localStorage.removeItem('usuario');
    this.usuario = null;
    this.afAuth.auth.signOut().then(() => {
      this.isLogued = false;
      this.appCtrl.getRootNav().setRoot(MyApp);
    });
  }
  writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }
  generateFriendList(userId) {
    firebase.database().ref('friends/' + userId).set({
      friendsNumber:0
    });
  }

}
