import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFeatureComponent } from './media-feature.component';

describe('MediaFeatureComponent', () => {
  let component: MediaFeatureComponent;
  let fixture: ComponentFixture<MediaFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
