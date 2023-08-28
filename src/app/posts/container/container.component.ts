import { Component, OnInit } from '@angular/core';
import { BrochureCategoryService } from 'src/app/brochure-category.service';
import { ClickService } from 'src/app/click.service';
import { Post, PostsService } from 'src/app/posts.service';
import { SearchQueryService } from 'src/app/search-query.service';

@Component({
  selector: 'posts-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  brochureBaseUrl: string = 'assets/images/posts/container/';
  brochures: any;
  show404 = false;
  news: Post | null = null;
  selectedTag = 'todos os tópicos';
  selectedCategory: string = '';
  queryToSearch: string | null = null;
  filteredBrochures: any | null = null;

  constructor(
    private click: ClickService, 
    private posts: PostsService,
    private brochureCategory: BrochureCategoryService,
    private searchQuery: SearchQueryService
  ) {};

  ngOnInit(): void {
    this.click.getClicks().subscribe((tagName) => {
      this.selectedTag = tagName;
    });

    this.brochureCategory.getCategories()
    .subscribe((categoryName) => {
      this.selectedCategory = categoryName;
    })

    this.searchQuery.getQueries()
    .subscribe((query) => {
      this.filterBrochuresByQuery(query);
      this.show404 = !Boolean(this.filteredBrochures?.length);
    })
    
    this.fecthPosts();
  }


  
  fecthPosts(): void {
    this.posts.posts$.subscribe((posts) => {
      if(posts) { 
        this.news = posts;
        this.brochures = this.news?.brochuras;
      }
    });
  }  

  filterBrochuresByQuery(queryToSearch: string | null): void {
    if (queryToSearch && this.brochures) {
      this.filteredBrochures = this.brochures.filter((brochure: any) => {
        return brochure.titulo_brochura.
          toLowerCase().includes(
            queryToSearch.toLowerCase()
          );
      });
    } else {
      this.filteredBrochures = null;
    }
  }

  /*brochures: Brochure[] = [
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'A mulher e a ciência'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'Semana mundial do espaço'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'Soluções tecnológicas'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'A mulher e a ciência'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'Semana mundial do espaço'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'Semana mundial do espaço'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'A mulher e a ciência'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'Semana mundial do espaço'
    },
    {
      imageSrc: this.brochureBaseUrl,
      date: '13/06/2023',
      title: 'Soluções tecnológicas'
    }
  ]*/
}

/*
export interface Brochure {
  imageSrc: string
  date: string
  title: string
}*/