import { Component } from '@angular/core';
import { NavController, ViewController, Platform, ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {

  nome: string;
  modalidade: string;
  //base64Image: string;
  base64Image = 'assets/icone.png';

  constructor(
    public navCtrl: NavController,
    public view: ViewController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private camera: Camera
  ){

  }

  saveItem(){
    let newItem = {
      nome: this.nome,
      modalidade: this.modalidade,
      fotoPerfil: this.base64Image
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

  takePicture(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 640,
      targetHeight: 640,
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  openGallery(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 512,
      targetHeight: 512,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Foto do atleta',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Tirar foto',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
            console.log('Take photo clicked');
          }
        },
        {
          text: 'Carregar foto',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.openGallery();
            console.log('Load photo clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  log():void {
    console.log('Your message here');
  }

}
