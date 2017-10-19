import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';

import { MyApp } from './app.component';
import { ModalityList } from '../pages/modality-list/modality-list';
import { AthleteList } from '../pages/athlete-list/athlete-list';
import { AthleteAdd } from '../pages/athlete-add/athlete-add';
import { AthleteDetail } from '../pages/athlete-detail/athlete-detail';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    ModalityList,
    AthleteList,
    AthleteAdd,
    AthleteDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalityList,
    AthleteList,
    AthleteAdd,
    AthleteDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Crop,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
