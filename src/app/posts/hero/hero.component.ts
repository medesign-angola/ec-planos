import { Component } from '@angular/core';
import { ClickService } from 'src/app/click.service';

@Component({
  selector: 'posts-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  constructor(private click: ClickService) {};
  selectedTag: string = 'todos os tópicos';

  sendTag(tagName: string): void {
    this.selectedTag = tagName;
    this.click.sendClick(tagName);
  }

}
