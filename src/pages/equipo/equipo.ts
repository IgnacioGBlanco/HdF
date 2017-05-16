import { Component } from '@angular/core';
import {NavController, NavParams, ModalController } from 'ionic-angular';
import { HeroePage } from '../heroe/heroe'

import { HeroesService, Heroe } from '../../services/heroes.service';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {
  nombre: string;
  heroes: Heroe[] = [];
  constructor(public navCtrl: NavController,   private modalCtrl: ModalController,public navParams: NavParams, private _heroesService: HeroesService, private _loginService: LoginService) {
  }
  ngOnInit() {
    this.nombre = this.navParams.get('pais').nombre;
    for (let heroe of this._heroesService.getHeroes()) {
    if (heroe.pais == this.nombre) {
      this.heroes.push(heroe);
    }
  }
  console.log(this.heroes);
}
onViewHeroe(heroe: Heroe) {
    const modal = this.modalCtrl.create(HeroePage, heroe);
    modal.present();
    //para controlar una respuesta de la ventana emergente (View COntroller)
    // modal.onDidDismiss((remove: boolean) => {
    //   if (remove) {
    //     this.onRemoveFromFavorites(quote);
    //   }
    // });
  }
  logout() {
    this._loginService.logOut();

  }
  logIn() {
    this._loginService.logIn();
  }
}
