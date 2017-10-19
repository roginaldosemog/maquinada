import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AthleteAdd } from '../athlete-add/athlete-add';
import { AthleteDetail } from '../athlete-detail/athlete-detail';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-athlete-list',
  templateUrl: 'athlete-list.html'
})
export class AthleteList {

  selectedModality: any;
  public items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public dataService: Data
  ){
    this.selectedModality = navParams.get('item');

    //this.dataService.getData2('datab').then((todos) => {
    this.dataService.getData(this.selectedModality.mod_name).then((todos) => {

      if(todos){
        this.items = todos;
      }

    });
    /*
    this.dataService.getData().then((todos) => {

      if(todos){
        this.items = todos;
      }

    });
    */
  }

  ionViewDidLoad(){

  }

  addItem(){

    let addModal = this.modalCtrl.create(AthleteAdd);

    addModal.onDidDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.selectedModality.mod_name, this.items);
    //this.dataService.save(this.items);
  }

  deleteItem(item){
    var i;
    for(i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
    this.dataService.save(this.selectedModality.mod_name, this.items);
    //this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(AthleteDetail, {
      item: item
    });
  }

  log():void {
    console.log('Your message here');
  }

}
