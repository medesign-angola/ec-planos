import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSliderComponent } from './projects-slider.component';

describe('ProjectsSliderComponent', () => {
  let component: ProjectsSliderComponent;
  let fixture: ComponentFixture<ProjectsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSliderComponent]
    });
    fixture = TestBed.createComponent(ProjectsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
