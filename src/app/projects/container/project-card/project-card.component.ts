import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() index: number = 0;
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
