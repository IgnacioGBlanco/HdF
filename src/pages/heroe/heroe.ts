import { Component } from '@angular/core';
import {ViewController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-heroe',
  templateUrl: 'heroe.html',
})
export class HeroePage {
imagen:string
  constructor(private viewCtrl: ViewController,
            private navParams:NavParams) {

  }

  ionViewDidLoad(){
    this.imagen = this.navParams.get('imgbody');
    console.log(this.imagen);
  }
  onClose(remove = false) {
    this.viewCtrl.dismiss();
  }
}
