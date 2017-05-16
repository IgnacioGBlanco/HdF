import { Component} from '@angular/core';
import {PaisesPage} from '../paises/paises';
import {ListaAmigosPage} from '../lista-amigos/lista-amigos';
@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
  paisesPage = PaisesPage;
  amigosPage = ListaAmigosPage;
  }
