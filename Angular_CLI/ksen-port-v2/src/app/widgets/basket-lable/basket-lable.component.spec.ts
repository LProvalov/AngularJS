import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketLableComponent } from './basket-lable.component';

describe('BasketLableComponent', () => {
  let component: BasketLableComponent;
  let fixture: ComponentFixture<BasketLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
