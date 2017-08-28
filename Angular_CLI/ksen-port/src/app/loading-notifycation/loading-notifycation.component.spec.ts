import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingNotifycationComponent } from './loading-notifycation.component';

describe('LoadingNotifycationComponent', () => {
  let component: LoadingNotifycationComponent;
  let fixture: ComponentFixture<LoadingNotifycationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingNotifycationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingNotifycationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
