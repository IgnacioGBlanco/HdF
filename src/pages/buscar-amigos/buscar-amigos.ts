import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../services/login.service';
import { AmigosService } from '../../services/amigos.service';
import { ActionSheetController, AlertController } from 'ionic-angular';
/**
 * Generated class for the BuscarAmigos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buscar-amigos',
  templateUrl: 'buscar-amigos.html',
})

export class BuscarAmigosPage {
  amigos: any[] = [];
  amigosAnadidos: any[] = [];
  userId: string;
  friendId: string;
  textItem: string;
  constructor(private _amigosService: AmigosService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private _loginService: LoginService, private navParams: NavParams, private navCtrl: NavController) {
    this.userId = _loginService.usuario.user.uid;
    this.amigosAnadidos = navParams.get('amigos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarAmigos');
  }
  buscarAmigo(nombre: string) {
    console.log("buscando " + nombre);
    if (nombre != undefined && nombre != null && nombre.length > 0) {
      this._amigosService.burcarAmigo(nombre).subscribe(data => {
        this.amigos = data;
      });
    } else {
      this.amigos = [];
    }
  }
  comprobarSiYaEsAmigo() {
    for (let amigoK in this.amigosAnadidos) {
      console.log(this.amigosAnadidos[amigoK]["amigo1"] + "  " + this.friendId)
      if (this.amigosAnadidos[amigoK]["amigo1"] === this.friendId || this.amigosAnadidos[amigoK]["amigo2"] === this.friendId) {
        return false;
      }
    }
    return true;
  }
  comprobarSiSoyYo() {
    if (this.userId === this.friendId) {
      return false;
    }
    return true;
  }
  nuevoAmigo() {

    if (this.comprobarSiYaEsAmigo() && this.comprobarSiSoyYo()) {
      this._amigosService.nuevoAmigo(this.userId, this.friendId, this.amigosAnadidos).subscribe(data => {

        this.navCtrl.pop();
      },
        error => console.error(error)
      );
    } else {
      let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Accion Imposible',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
    }
  }
  opcionesAmigo(amigo: any, k: string) {
    this.friendId = k;
    console.log(amigo)
    this.presentActionSheet(amigo, k);
  }
  presentActionSheet(amigo: any, keyFriend: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: `Acciones con ${amigo.username} `,
      buttons: [
        {
          text: 'Solicitar',
          handler: () => {
            this.nuevoAmigo()

            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
