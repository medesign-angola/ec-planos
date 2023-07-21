import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityCardComponent } from './speciality-card.component';

describe('SpecialityCardComponent', () => {
  let component: SpecialityCardComponent;
  let fixture: ComponentFixture<SpecialityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialityCardComponent]
    });
    fixture = TestBed.createComponent(SpecialityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
