import { Component } from '@angular/core';
import {  NavParams } from 'ionic-angular';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  mensaje: string = "";
  elemento: any;
  amigo:any[];
  user:any;
  constructor(public _cs: ChatService, private navParams: NavParams) {
this.amigo = navParams.get('amigo');
this.user = navParams.get('user');
console.log(this.amigo );
console.log(this.user );
    this._cs.cargarMensajes( this.amigo["key$"] ).subscribe((data) => {
      console.log(data)
      setTimeout(() => this.elemento.scrollTop = this.elemento.scrollHeight, 50);
    })
  }
  ionViewDidLoad() {
    this.elemento = document.getElementById("app-mensajes")
  }
  enviar() {
    if (this.mensaje.length == 0) {
      return;
    }
    this._cs.agregarMensaje(this.mensaje, this.amigo, this.user)
      .then(() => console.log("Hecho!"))
      .catch((error) => console.log(error))
    this.mensaje = "";
  }

}
