import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllSpecialitiesButtonComponent } from './see-all-specialities-button.component';

describe('SeeAllSpecialitiesButtonComponent', () => {
  let component: SeeAllSpecialitiesButtonComponent;
  let fixture: ComponentFixture<SeeAllSpecialitiesButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeAllSpecialitiesButtonComponent]
    });
    fixture = TestBed.createComponent(SeeAllSpecialitiesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
