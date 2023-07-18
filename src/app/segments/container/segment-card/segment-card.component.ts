import { Component, Input } from '@angular/core';

@Component({
  selector: 'segment-card',
  templateUrl: './segment-card.component.html',
  styleUrls: ['./segment-card.component.css']
})
export class SegmentCardComponent {
  @Input() index: number = 0;
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}


