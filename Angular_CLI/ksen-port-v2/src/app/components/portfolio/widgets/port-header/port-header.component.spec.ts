import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortHeaderComponent } from './port-header.component';

describe('PortHeaderComponent', () => {
  let component: PortHeaderComponent;
  let fixture: ComponentFixture<PortHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
