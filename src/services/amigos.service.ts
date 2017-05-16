import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"


import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/Rx';
@Injectable()
export class AmigosService {
  fireUrlUsers: string = "https://heroesdelfutbol-dc20e.firebaseio.com/users";
  fireUrlFriends: string = "https://heroesdelfutbol-dc20e.firebaseio.com/friends.json";
  fireUrlFriendsAcepted: string = "https://heroesdelfutbol-dc20e.firebaseio.com/friends";
fireURLChat:string= "https://heroesdelfutbol-dc20e.firebaseio.com//chats"
  amigos: any[] = [];
  constructor(private http: Http) {

  }

  nuevoAmigo(miId: string, idAmigo: string, amigosAnadidos: any[]) {

    let body = { amigo1: miId, amigo2: idAmigo, aceptada: false, respondida: false };
    let headers = new Headers({
      'content-type': 'application/json'
    })
    return this.http.post(this.fireUrlFriends, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      }
      );
  }

  respuestaAmigo(idAmistad: string,amigo1:string, amigo2:string ,aceptada: boolean) {
    let body = {  respondida: true,amigo1,amigo2, aceptada:aceptada };
    let headers = new Headers({
      'content-type': 'application/json'
    })
    let url = `${this.fireUrlFriendsAcepted}/${idAmistad}.json`;
    return this.http.put(url, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }
  //
  burcarAmigo(nombreAmigo: string) {
    return Observable.from(firebase.database().ref('/users/').orderByChild('username').startAt(nombreAmigo).once('value').then(function(snapshot) {
      if (snapshot.val() != null && snapshot.val() != undefined && snapshot.val() != "") {
        return snapshot.val();
      } else return [];

    }));
  }


  burcarAmigoPorId(id: string) {
    let url = `${this.fireUrlUsers}/${id}.json`;
    return this.http.get(url)
      .map(res => {
    return  res.json()
      });
  }
  burcarAmigos(idUser: string, amigoOrden:string) {

    return Observable.from(firebase.database().ref('/friends/').orderByChild(amigoOrden).equalTo(idUser).once('value').then(function(snapshot) {

      if (snapshot.val() != null && snapshot.val() != undefined && snapshot.val() != "") {

        return snapshot.val();
      } else return [];

    }));
    // let url = `${this.fireUrlUsers}.json`
    // return this.http.get(url)
    //   .map(res => res.json());
  }

  eliminarAmigo(key: String) {
console.log(`${this.fireUrlFriendsAcepted}/${key}.json`);
    let url = `${this.fireUrlFriendsAcepted}/${key}.json`
    return this.http.delete(url)
      .map(res => {
        res.json()
      })
  }
  eliminarChat(key: String){
    console.log(`${this.fireURLChat}/${key}.json`);
        let url = `${this.fireURLChat}/${key}.json`
        return this.http.delete(url)
          .map(res => {
            res.json()
          })

  }
}
