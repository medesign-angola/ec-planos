import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedNewsSliderComponent } from './related-news-slider.component';

describe('RelatedNewsSliderComponent', () => {
  let component: RelatedNewsSliderComponent;
  let fixture: ComponentFixture<RelatedNewsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedNewsSliderComponent]
    });
    fixture = TestBed.createComponent(RelatedNewsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
