import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }
/*
  getData() {
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }
*/
  getData(datab: string) {
    return this.storage.get(datab);
  }

  save(datab: string, data){
    this.storage.set(datab, data);
  }

}
