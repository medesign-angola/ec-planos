import { Component, Input } from '@angular/core';

@Component({
  selector: 'speciality-card',
  templateUrl: './speciality-card.component.html',
  styleUrls: ['./speciality-card.component.css']
})
export class SpecialityCardComponent {
  @Input() index: number = 0;
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
