import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetail {

  nome;
  modalidade_id;
  fotoPerfil;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('item').nome;
    this.modalidade_id = this.navParams.get('item').modalidade_id;
    this.fotoPerfil = this.navParams.get('item').fotoPerfil;
  }

}
