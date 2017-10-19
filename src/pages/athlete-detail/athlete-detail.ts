import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-athlete-detail',
  templateUrl: 'athlete-detail.html',
})
export class AthleteDetail {

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
