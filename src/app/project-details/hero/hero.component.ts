import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService, Project } from 'src/app/projects.service';

@Component({
  selector: 'projects-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(
    private projects: ProjectsService, 
    private route: ActivatedRoute) {
  };
  intro: Project | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const projectName = param['projectName'];
      this.projects.getProjectByName(projectName).subscribe(
        (project) => {
          this.intro = project;
        },
        (error) => {
          console.error('Error finding project:', error);
        }
      );
    }) 
  }
}
