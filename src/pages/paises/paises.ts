import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EquipoPage } from '../equipo/equipo';
import { PaisesService, Pais } from '../../services/paises.service';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html',
})
export class PaisesPage {
  paises: Pais[] = [];
  usuario: string;
  equipoPage = EquipoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _paisesService: PaisesService,
    public _loginService: LoginService) {
    this.usuario = _loginService.usuario.user.displayName;
    console.log(this.usuario);
    this.paises = this._paisesService.getPaises();
  }
}
