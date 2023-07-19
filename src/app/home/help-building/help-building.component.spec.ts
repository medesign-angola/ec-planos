import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBuildingComponent } from './help-building.component';

describe('HelpBuildingComponent', () => {
  let component: HelpBuildingComponent;
  let fixture: ComponentFixture<HelpBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpBuildingComponent]
    });
    fixture = TestBed.createComponent(HelpBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
