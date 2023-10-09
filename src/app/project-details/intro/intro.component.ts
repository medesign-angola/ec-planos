import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from 'src/app/projects.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'projects-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit {
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
