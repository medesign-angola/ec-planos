import { Component } from '@angular/core';
import { ClickService } from 'src/app/click.service';
import { SearchQueryService } from 'src/app/search-query.service';

@Component({
  selector: 'posts-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  constructor(
    private click: ClickService, 
    private searchQuery: SearchQueryService 
  ) {};
  
  selectedTag: string = 'todos os tópicos';
  query: string = '';

  sendTag(tagName: string): void {
    this.selectedTag = tagName;
    this.click.sendClick(tagName);
  }
  
  onQueryChange(): void {
    this.searchQuery.sendQuery(this.query);
  }

}
