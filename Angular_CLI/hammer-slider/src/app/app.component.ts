import { Component, ElementRef, ViewChild } from '@angular/core';
import { setInterval, setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild("tref", { read: ElementRef }) tref: ElementRef;

  x: number = 0;
  y: number = 0;
  startX: number = 0;
  startY: number = 0;

  offset: number = 200;
  deltaX: number = 0;
  direction: number = 0;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  onPanStart(event: any): void {
    event.preventDefault();
    this.startX = this.x;
    this.startY = this.y;
    setTimeout(() => {
      this.move(this.offset * this.direction);
      this.direction = 0;
    }, 100);
  }

  onPan(event: any): void {
    event.preventDefault();
    if (event.deltaX > 0) this.direction = 1;
    else this.direction = -1;
  }

  onLeft(event: any): void {
    this.move(-1 * this.offset);
  }

  onRigth(event: any): void {
    this.move(this.offset);
  }

  private move(delta: number) {
    this.deltaX += delta;
    var translate3d = `translate3d(${this.deltaX}px, 0, 0)`;
    this.tref.nativeElement.style.transform = translate3d;
  }
}
