import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
@Input() text: string = '';
@Input() imageSrc: string = '';
show = true;
}
