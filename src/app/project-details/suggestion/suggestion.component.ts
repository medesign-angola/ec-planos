import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'projects-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
@Input() title: string = '';
@Input() description: string = '';
@Input() imageSrc: string = ''; 

  
constructor(
  private projects: ProjectsService, 
  private route: ActivatedRoute) {
};
suggestions: Project | null = null;

ngOnInit(): void {
  this.route.params.subscribe((param) => {
    const projectName = param['projectName'];
    this.projects.getProjectByName(projectName).subscribe(
      (project) => {
        this.suggestions = project;
      },
      (error) => {
        console.error('Error finding project:', error);
      }
    );
  }) 
}
}
