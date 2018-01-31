import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { setInterval, setTimeout } from 'timers';
import {} from ''

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @ViewChild("tref", { read: ElementRef }) tref: ElementRef;
  offset: number = 500;
  deltaX: number = 0;
  direction: number = 0;

  constructor() { }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.offset = this.tref.nativeElement.clientWidth;
  }

  onPanStart(event: any): void {
    event.preventDefault();
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
