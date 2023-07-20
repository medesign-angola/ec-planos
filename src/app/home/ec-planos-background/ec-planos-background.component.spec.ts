import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcPlanosBackgroundComponent } from './ec-planos-background.component';

describe('EcPlanosBackgroundComponent', () => {
  let component: EcPlanosBackgroundComponent;
  let fixture: ComponentFixture<EcPlanosBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcPlanosBackgroundComponent]
    });
    fixture = TestBed.createComponent(EcPlanosBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
