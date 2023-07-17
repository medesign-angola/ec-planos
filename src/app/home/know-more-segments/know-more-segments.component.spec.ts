import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreSegmentsComponent } from './know-more-segments.component';

describe('KnowMoreSegmentsComponent', () => {
  let component: KnowMoreSegmentsComponent;
  let fixture: ComponentFixture<KnowMoreSegmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowMoreSegmentsComponent]
    });
    fixture = TestBed.createComponent(KnowMoreSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
