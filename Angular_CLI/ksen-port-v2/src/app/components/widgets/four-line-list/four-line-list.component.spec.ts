import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourLineListComponent } from './four-line-list.component';

describe('FourLineListComponent', () => {
  let component: FourLineListComponent;
  let fixture: ComponentFixture<FourLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourLineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
