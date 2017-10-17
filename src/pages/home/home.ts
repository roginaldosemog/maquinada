import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItem } from '../add-item/add-item';
import { ItemDetail } from '../item-detail/item-detail';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getData().then((todos) => {

      if(todos){
        this.items = todos;
      }

    });
  }

  ionViewDidLoad(){

  }

  addItem(){

    let addModal = this.modalCtrl.create(AddItem);

    addModal.onDidDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  deleteItem(item){
    var i;
    for(i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetail, {
      item: item
    });
  }

}
