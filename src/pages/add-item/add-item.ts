import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {

  nome: string;
  modalidade: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){
    let newItem = {
      nome: this.nome,
      modalidade: this.modalidade
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}
