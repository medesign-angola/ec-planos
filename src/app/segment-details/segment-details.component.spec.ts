import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentDetailsComponent } from './segment-details.component';

describe('SegmentDetailsComponent', () => {
  let component: SegmentDetailsComponent;
  let fixture: ComponentFixture<SegmentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentDetailsComponent]
    });
    fixture = TestBed.createComponent(SegmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
