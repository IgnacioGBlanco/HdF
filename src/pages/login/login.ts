import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private _loginService: LoginService) {

  }
  logIn() {
    this._loginService.logIn().subscribe();
  }

}
