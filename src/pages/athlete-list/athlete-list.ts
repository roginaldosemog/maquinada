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

  modality: any;
  public items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public dataService: Data
  ){
    this.modality = navParams.get('item');

    //this.dataService.getData2('datab').then((todos) => {
    this.dataService.getData(this.modality.mod_name).then((athletes) => {

      if(athletes){
        this.items = athletes;
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
    this.dataService.save(this.modality.mod_name, this.items);
    //this.dataService.save(this.items);
  }

  deleteItem(item){
    var i;
    for(i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
    this.dataService.save(this.modality.mod_name, this.items);
    //this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(AthleteDetail, {
      item: item,
      mod_name: this.modality.mod_name
    });
  }

  log():void {
    console.log('Your message here');
  }

}
