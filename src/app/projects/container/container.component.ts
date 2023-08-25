import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService, Project } from 'src/app/projects.service';
@Component({
  selector: 'projects-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private projects: ProjectsService) {
  };
  
  cards: Array<Project> | null = null;
  
  ngOnInit(): void {
    this.projects.projects$.subscribe((projects) => {
      if(projects) { 
        this.cards = projects;
      }
    });
  }  



 
}


