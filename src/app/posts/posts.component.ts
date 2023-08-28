import { Component } from '@angular/core';
import { ClickService } from '../click.service';
import { BrochureCategoryService } from '../brochure-category.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {

  constructor(
    private click: ClickService, 
    private brochureCategory: BrochureCategoryService
  ) {};
  
  selectedTag: string = 'Todos os Tópicos';

  ngOnInit(): void {
    this.click.getClicks().subscribe((tagName) => {
      this.selectedTag = tagName;
      this.selectedTag = this.pascalCase(this.selectedTag);
    });
  }

  sendCategory(categoryName: any): void {
    this.brochureCategory.sendCategory(categoryName.value);
  }

  pascalCase(phrase: string) {
    return phrase
    .split(' ')
    .map(
      word => word.charAt(0)!=='o' 
      ? word.charAt(0).toUpperCase() + word.slice(1) 
      : word)
    .join(' ');
  }
}
