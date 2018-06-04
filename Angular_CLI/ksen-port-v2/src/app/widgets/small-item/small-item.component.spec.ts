import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallItemComponent } from './small-item.component';

describe('SmallItemComponent', () => {
  let component: SmallItemComponent;
  let fixture: ComponentFixture<SmallItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
