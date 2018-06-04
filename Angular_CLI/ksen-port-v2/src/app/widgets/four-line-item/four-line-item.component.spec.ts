import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourLineItemComponent } from './four-line-item.component';

describe('FourLineItemComponent', () => {
  let component: FourLineItemComponent;
  let fixture: ComponentFixture<FourLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
