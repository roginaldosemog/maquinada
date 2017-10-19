import { Injectable } from '@angular/core';

@Injectable()
export class Language {

  constructor() {

  }

  getModalidadeName(md_id: number) {
    var md_name: string;
    switch(md_id){
      case 0:
        md_name = 'Atletismo Masculino';
        break;
      case 1:
        md_name = 'Atletismo Feminino';
        break;
      default:
        md_name = 'default modality'
        break;
    }

    return md_name;
  }

}
