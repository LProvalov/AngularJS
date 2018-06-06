import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumItemComponent } from './medium-item.component';

describe('MediumItemComponent', () => {
  let component: MediumItemComponent;
  let fixture: ComponentFixture<MediumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
