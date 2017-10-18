import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetail {

  nome;
  modalidade;
  fotoPerfil;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('item').nome;
    this.modalidade = this.navParams.get('item').modalidade;
    this.fotoPerfil = this.navParams.get('item').fotoPerfil;
  }

}
