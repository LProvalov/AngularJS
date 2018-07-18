import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLeftImgItemComponent } from './big-left-img-item.component';

describe('BigLeftImgItemComponent', () => {
  let component: BigLeftImgItemComponent;
  let fixture: ComponentFixture<BigLeftImgItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigLeftImgItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigLeftImgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
