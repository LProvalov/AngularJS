import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourLineComponent } from './four-line.component';

describe('FourLineComponent', () => {
  let component: FourLineComponent;
  let fixture: ComponentFixture<FourLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
