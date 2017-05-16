import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginService} from '../services/login.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  loged:boolean;
    rootPage:any ;
    rootPage2:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _loginService: LoginService) {
    this.rootPage = _loginService.isLogued?TabsPage:LoginPage;
console.log(_loginService.isLogued);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
