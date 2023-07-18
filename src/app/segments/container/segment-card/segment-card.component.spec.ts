import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentCardComponent } from './segment-card.component';

describe('SegmentCardComponent', () => {
  let component: SegmentCardComponent;
  let fixture: ComponentFixture<SegmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentCardComponent]
    });
    fixture = TestBed.createComponent(SegmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
