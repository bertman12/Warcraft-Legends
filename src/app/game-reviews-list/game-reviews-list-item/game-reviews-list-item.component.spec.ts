import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReviewsListItemComponent } from './game-reviews-list-item.component';

describe('GameReviewsListItemComponent', () => {
  let component: GameReviewsListItemComponent;
  let fixture: ComponentFixture<GameReviewsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameReviewsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReviewsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
