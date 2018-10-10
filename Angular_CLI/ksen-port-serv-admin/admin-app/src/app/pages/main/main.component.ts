import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public username: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getUsername().subscribe((username: string) => {
      this.username = username;
    });
  }
}
