import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any>;
  usuario:any ={}
  mensaje: string = "";
  leidoYo: boolean;
  leidoEl:boolean;
  constructor(private db: AngularFireDatabase) {

  }
  cargarMensajes(chatPrivado:string){
  this.chats = this.db.list(`/chats/${chatPrivado}`,{
    query:{
      limitToLast:20,
      orderByKey:true
    }
  })
  return this.chats;

  }
  agregarMensaje(texto: string, amigo:any, user:any) {
  // let  amigoId:string = amigo['amigo1']==user['idUser']?amigo['amigo2']:amigo['amigo1']
  // console.log(user)
    let mensaje: Mensaje = {
      nombre: user['displayName'],
      mensaje: texto,
      uid:user['uid'],
      leidoYo:true,
      leidoEl:false
    }
    return this.chats.push(mensaje);
  }

  mensajesSinLeer(){
    let numero;
    for(let mensaje in this.chats){
      if(!mensaje["leidoYo"]){
        numero++;
      }
    }
    console.log(numero);
    return numero
  }
}
export interface Mensaje {
  nombre: string;
  mensaje: string;
  leidoYo: boolean;
  leidoEl: boolean;

  uid?: string;
}
