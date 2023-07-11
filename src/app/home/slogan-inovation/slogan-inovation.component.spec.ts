import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganInovationComponent } from './slogan-inovation.component';

describe('SloganInovationComponent', () => {
  let component: SloganInovationComponent;
  let fixture: ComponentFixture<SloganInovationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SloganInovationComponent]
    });
    fixture = TestBed.createComponent(SloganInovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
