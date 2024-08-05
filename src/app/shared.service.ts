import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private myData: any;
  constructor() { }

  setData(data: any) {
    this.myData = data;    
  }

  getData() {    
    return this.myData;
  }
  
}
