import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsSpecialitiesComponent } from './segments-specialities.component';

describe('SegmentsSpecialitiesComponent', () => {
  let component: SegmentsSpecialitiesComponent;
  let fixture: ComponentFixture<SegmentsSpecialitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentsSpecialitiesComponent]
    });
    fixture = TestBed.createComponent(SegmentsSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
