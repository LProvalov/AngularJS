import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingNotifycationService {

  private notifySource = new Subject<string>();
  notify$ = this.notifySource.asObservable();

  turnMessageShown(message: string){
    this.notifySource.next(message);
  }

  constructor() { 
  }

}
