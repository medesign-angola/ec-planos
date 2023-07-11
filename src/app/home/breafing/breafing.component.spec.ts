import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreafingComponent } from './breafing.component';

describe('BreafingComponent', () => {
  let component: BreafingComponent;
  let fixture: ComponentFixture<BreafingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreafingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreafingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
