import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AthleteList } from '../athlete-list/athlete-list';

@Component({
  selector: 'page-modality-list',
  templateUrl: 'modality-list.html'
})
export class ModalityList {

  modalities: Array<{mod_id: number, mod_name: string}>;

  constructor(public navCtrl: NavController) {
    this.modalities = [
      {
        mod_id: 0,
        mod_name: 'Atletismo Masculino'
      },
      {
        mod_id: 1,
        mod_name: 'Atletismo Feminino'
      },
      {
        mod_id: 2,
        mod_name: 'Basquete Masculino'
      },
      {
        mod_id: 3,
        mod_name: 'Basquete Feminino'
      },
      {
        mod_id: 4,
        mod_name: 'Futebol'
      },
      {
        mod_id: 5,
        mod_name: 'Futsal Masculino'
      },
      {
        mod_id: 6,
        mod_name: 'Futsal Feminino'
      },
      {
        mod_id: 7,
        mod_name: 'Handebol Masculino'
      },
      {
        mod_id: 8,
        mod_name: 'Handebol Feminino'
      },
      {
        mod_id: 9,
        mod_name: 'Jiu Jitsu'
      },
      {
        mod_id: 10,
        mod_name: 'Judô'
      },
      {
        mod_id: 11,
        mod_name: 'Natação Masculino'
      },
      {
        mod_id: 12,
        mod_name: 'Natação Feminino'
      },
      {
        mod_id: 13,
        mod_name: 'Peteca Masculino'
      },
      {
        mod_id: 14,
        mod_name: 'Peteca Feminino'
      },
      {
        mod_id: 15,
        mod_name: 'Rugby'
      },
      {
        mod_id: 16,
        mod_name: 'Sinuca Masculino'
      },
      {
        mod_id: 17,
        mod_name: 'Sinuca Feminino'
      },
      {
        mod_id: 18,
        mod_name: 'Tênis Masculino'
      },
      {
        mod_id: 19,
        mod_name: 'Tênis Feminino'
      },
      {
        mod_id: 20,
        mod_name: 'Tênis de Mesa Masculino'
      },
      {
        mod_id: 21,
        mod_name: 'Tênis de Mesa Feminino'
      },
      {
        mod_id: 22,
        mod_name: 'Volei Masculino'
      },
      {
        mod_id: 23,
        mod_name: 'Volei Feminino'
      },
      {
        mod_id: 24,
        mod_name: 'Volei de Praia Masculino'
      },
      {
        mod_id: 25,
        mod_name: 'Volei de Praia Feminino'
      },
      {
        mod_id: 26,
        mod_name: 'Xadrez Masculino'
      },
      {
        mod_id: 27,
        mod_name: 'Xadrez Feminino'
      }
    ];
  }

  openAthleteList(item){
    this.navCtrl.push(AthleteList, {
      item: item
    });
  }

}
