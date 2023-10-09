import { Component, Input } from '@angular/core';

@Component({
  selector: 'brochure-card',
  templateUrl: './brochure-card.component.html',
  styleUrls: ['./brochure-card.component.css']
})
export class BrochureCardComponent {
@Input() imageSrc: string = '';
@Input() date: string = '';
@Input() title: string = '';
}
