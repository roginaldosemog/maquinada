import { Component } from '@angular/core';
import { NavController, ViewController, Platform, ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';

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
    private camera: Camera, private crop: Crop
  ){}

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

    }).then((imageData) => {
        this.crop.crop(imageData, {quality: 75})
        .then((newImage) => {
          this.base64Image = newImage;
        }, error => console.error("error", error));
    }, function(error){
      console.log(error);
    });
  }

  openGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }).then((imageData) => {
        this.crop.crop(imageData, {quality: 75})
        .then((newImage) => {
          this.base64Image = newImage;
        }, error => console.error("error", error));
    }, function(error){
      console.log(error);
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
