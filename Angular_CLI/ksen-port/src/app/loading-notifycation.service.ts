import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingNotifycationService {

  private notifyTurnOn = new Subject<string>();
  private notifyTurnOff = new Subject<void>();
  notifyTurnOn$ = this.notifyTurnOn.asObservable();
  notifyTurnOff$ = this.notifyTurnOff.asObservable();

  turnOnMessageShown(message: string){
    this.notifyTurnOn.next(message);
  }

  turnOffMessageShown(){
    this.notifyTurnOff.next();
  }

  constructor() { 
  }

}
