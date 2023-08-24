import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  constructor(private router: Router) {};
  @Input() index: number = 0;
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  //@ViewChild('l2', { static: false }) l2!: ElementRef<HTMLDivElement>;

  seeProject(projectName: string):void {
    this.router.navigate(['/project-details', projectName]);
  }
}
