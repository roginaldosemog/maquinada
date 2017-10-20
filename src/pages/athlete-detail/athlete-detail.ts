import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-athlete-detail',
  templateUrl: 'athlete-detail.html',
})
export class AthleteDetail {

  nome;
  mod_name;
  fotoPerfil;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.nome = this.navParams.get('item').nome;
    this.mod_name = this.navParams.get('mod_name');
    this.fotoPerfil = this.navParams.get('item').fotoPerfil;
  }

}
