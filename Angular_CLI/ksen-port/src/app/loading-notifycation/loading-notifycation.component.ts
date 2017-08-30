import { Component, OnInit } from '@angular/core';
import { LoadingNotifycationService } from './../loading-notifycation.service';

@Component({
  selector: 'app-loading-notifycation',
  templateUrl: './loading-notifycation.component.html',
  styleUrls: ['./loading-notifycation.component.css']
})
export class LoadingNotifycationComponent implements OnInit {

  private DefaultMessage: string = "Loading...";

  loadingMessage: string;
  isShown: boolean;

  constructor( private loadingNotifycationService: LoadingNotifycationService ) {
    loadingNotifycationService.notifyTurnOn$.subscribe(
      notify => {
        this.isShown = true;
        this.loadingMessage = notify ? notify : this.DefaultMessage;
      }
    );

    loadingNotifycationService.notifyTurnOff$.subscribe(
      () => {
        this.isShown = false;
      }
    )
  }

  ngOnInit() {
    this.loadingMessage = this.DefaultMessage;
    this.isShown = false;
  }

}
