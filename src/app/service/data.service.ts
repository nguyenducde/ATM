import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage){
  }
  public async set(value){
    return await this.storage.set('ducde-json',value);
  }
  public async get(){
    return await this.storage.get('ducde-json');
  }
  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }

  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
