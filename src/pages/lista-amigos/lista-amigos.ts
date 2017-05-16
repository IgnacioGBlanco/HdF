import { Component } from '@angular/core';
import { AmigosService } from '../../services/amigos.service';
import { LoginService } from '../../services/login.service';
import { ChatService } from '../../services/chat.service';
import { BuscarAmigosPage } from '../buscar-amigos/buscar-amigos';
import { ChatPage } from '../chat/chat';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-lista-amigos',
  templateUrl: 'lista-amigos.html',
})
export class ListaAmigosPage {
  public rootPage = ChatPage;
  amigos: any[] = [];
  amigosReciber: any[] = [];
  user: string;
  friendId: string;
  textItem: string;
  isSendingFriend: boolean;
  buscarAmigoPage = BuscarAmigosPage;
  constructor(private _amigosService: AmigosService,
    public navCtrl: NavController,
    private _loginService: LoginService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private navParams: NavParams,
    private _cs: ChatService) {
    this.user = _loginService.usuario.user;

  }

  ionViewWillEnter() {

    console.log('onViewDidLoad');
    this.amigos = [];
    this.buscarAmigos();

  }
  navegarPageAmigos() {
    this.navCtrl.push(this.buscarAmigoPage, { "amigos": this.amigos, "userId": this.user['uid'] })
  }
  buscarAmigos() {
    this.amigos = [];
    this._amigosService.burcarAmigos(this.user['uid'], "amigo1")
      .subscribe(data => {
        //  Paso de parentesis de objetos a corchete de objetos relaciones
        for (let key$ in data) {
          let a = data[key$];
          a.key$ = key$;
          this.amigos.push(data[key$]);

          this._cs.mensajesSinLeer();
        }
        console.log(this.amigos);

        this._amigosService.burcarAmigos(this.user['uid'], "amigo2")
          .subscribe(data2 => {
            //La data viene con un listado de objetos que hay que separar y hacer un listado de amigos


            for (let key$ in data2) {
              let a = data2[key$];
              a.key$ = key$;
              this.amigos.push(data2[key$]);

            }
            console.log(this.amigos);
            let i = 0;
            for (let ka of this.amigos) {
              ;
              this._amigosService.burcarAmigoPorId(this.elegirAmigo(ka)).subscribe(data => {
                this.amigos[i].profile_picture = data['profile_picture'];
                this.amigos[i].username = data['username'];
                i++;
              });
            }
          });

      });
  }
  elegirAmigo(ka: number) {
    if (ka["amigo2"] === this.user['uid']) {
      return ka["amigo1"]
    } else {
      return ka["amigo2"]
    }
  }
  opcionesAmigo(amigo: any, k: string) {
    this.friendId = k;
    console.log(amigo)
    this.presentActionSheet(amigo, k);
  }
  presentActionSheet(amigo: any, k: string) {

    this.elegirBotones(amigo, k);

  }
  elegirBotones(amigo: any, k: string) {
    if (amigo.aceptada == true) {
      let actionSheet = this.actionSheetCtrl.create({
        title: `Acciones con ${amigo.username} `,
        buttons: [
          {

            text: 'Eliminar',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
              this.eliminarAmigo(amigo.key$);
            }
          }, {
            text: 'Chat',
            handler: () => {
              //  this.nuevoAmigo()
              this.navCtrl.push(this.rootPage, { 'amigo': amigo, 'user': this.user });
              //    this.navParams= {};

            }
          },

          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    } else
      if (amigo.amigo2 == this.user['uid']) {
        let actionSheet = this.actionSheetCtrl.create({
          title: `Acciones con ${amigo.username} `,
          buttons: [
            {

              text: 'Eliminar',
              role: 'destructive',
              handler: () => {
                console.log('Destructive clicked');
                this.eliminarAmigo(amigo.key$);
              }
            }, {
              text: 'Responder',
              handler: () => {
                //  this.nuevoAmigo()
                this.showConfirm(amigo);
              }
            },

            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      } else {
        let actionSheet = this.actionSheetCtrl.create({
          title: `Acciones con ${amigo.username} `,
          buttons: [
            {
              text: 'Eliminar',
              role: 'destructive',
              handler: () => {
                console.log('Destructive clicked');
                this.eliminarAmigo(amigo.key$);
              }
            },

            {
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

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Petición enviada',
      buttons: ['OK']
    });
    alert.present();
  }
  showConfirm(amigo: any) {
    console.log(amigo);
    let confirm = this.alertCtrl.create({
      title: 'amigo.username',
      message: 'aceptas a amigo.username?',
      buttons: [
        {
          text: 'Denegar',
          handler: () => {
            this.eliminarAmigo(amigo.key$);


          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log(amigo.key$);
            this._amigosService.respuestaAmigo(amigo.key$, amigo.amigo1, amigo.amigo2, true).subscribe(
              (() => {
                this.buscarAmigos();
              })
            );
          }
        }
      ]
    });
    confirm.present();
  }
  eliminarAmigo(keyFriend: string) {
    this._amigosService.eliminarAmigo(keyFriend).subscribe(data => {
      this.buscarAmigos();
      this.eliminarChat(keyFriend);
      if (data) {

        console.error(data);
      } else {
        delete this.amigos[keyFriend];
      }
    })
  }
  eliminarChat(keyFriend: string) {
    this._amigosService.eliminarChat(keyFriend).subscribe(data => {
      if (data) {
        console.error(data);
      } else {
        delete this.amigos[keyFriend];
      }
    })
  }
}
