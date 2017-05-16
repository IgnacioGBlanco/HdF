import { Injectable } from '@angular/core';

@Injectable()
export class PaisesService {

    private paises: Pais[] = [
        {
            nombre: "Africa",
            img: "assets/img/pais_africa.jpg"
        },
        {
            nombre: "Alemania",
            img: "assets/img/pais_alemania.jpg"
        },
        {
            nombre: "America",
            img: "assets/img/pais_america.jpg"
        },
        {
            nombre: "Argentina",
            img: "assets/img/pais_argentina.jpg"
        },
        {
            nombre: "Brasil",
            img: "assets/img/pais_brasil.jpg"
        },
        {
            nombre: "España",
            img: "assets/img/pais_espana.jpg"
        },
        {
            nombre: "Europa",
            img: "assets/img/pais_europa.jpg"
        },
        {
            nombre: "Francia",
            img: "assets/img/pais_francia.jpg"
        },
        {
            nombre: "Holanda",
            img: "assets/img/pais_holanda.jpg"
        },
        {
            nombre: "Inglaterra",
            img: "assets/img/pais_inglaterra.jpg"
        },
        {
            nombre: "Italia",
            img: "assets/img/pais_italia.jpg"
        },
        {
            nombre: "Portugal",
            img: "assets/img/pais_portugal.jpg"
        },
        {
            nombre: "Uruguay",
            img: "assets/img/pais_uruguay.jpg"
        },
    ];
    constructor() {
        console.log("servicio listo");
    }
    getPaises():Pais[] {
        return this.paises;
    }
}
export interface Pais{
  nombre:string;
  img:string;
}
