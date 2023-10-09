import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'project-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() text: string = '';
  @Input() imageSrc: string = '';
  show = true;

  constructor(
    private projects: ProjectsService, 
    private route: ActivatedRoute) {
  };
  sections: Project | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const projectName = param['projectName'];
      this.projects.getProjectByName(projectName).subscribe(
        (project) => {
          this.sections = project;
        },
        (error) => {
          console.error('Error finding project:', error);
        }
      );
    }) 
  }
}
