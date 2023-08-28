import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent {
  @Input() imageSrc: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() avgReadingTime: string = '';
  @Input() briefing: string = '';
}
