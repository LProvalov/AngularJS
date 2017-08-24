import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksComponent } from './artworks.component';

describe('ArtworkComponent', () => {
  let component: ArtworkComponent;
  let fixture: ComponentFixture<ArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
