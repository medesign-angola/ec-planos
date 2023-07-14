import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllSegmentsButtonComponent } from './see-all-segments-button.component';

describe('SeeAllSegmentsButtonComponent', () => {
  let component: SeeAllSegmentsButtonComponent;
  let fixture: ComponentFixture<SeeAllSegmentsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeAllSegmentsButtonComponent]
    });
    fixture = TestBed.createComponent(SeeAllSegmentsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
