import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureCardComponent } from './brochure-card.component';

describe('BrochureCardComponent', () => {
  let component: BrochureCardComponent;
  let fixture: ComponentFixture<BrochureCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrochureCardComponent]
    });
    fixture = TestBed.createComponent(BrochureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
