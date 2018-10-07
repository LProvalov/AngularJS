import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFooterComponent } from './port-footer.component';

describe('PortFooterComponent', () => {
  let component: PortFooterComponent;
  let fixture: ComponentFixture<PortFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
