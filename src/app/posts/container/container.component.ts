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
  brochures: any; /*{} as Pick<Post, 'brochuras'>*/
  postCards: any; /*{} as Pick<Post, 'noticias'>*/
  showBrochure404 = false;
  showPost404 = false;
  news: Post | null = null;
  selectedTag = 'todos os tópicos';
  selectedCategory: string = '';
  queryToSearch: string | null = null;
  filteredBrochures = Array();
  filteredPostsByTag = Array();
  filteredPosts = Array();

  constructor(
    private click: ClickService, 
    private posts: PostsService,
    private brochureCategory: BrochureCategoryService,
    private searchQuery: SearchQueryService
  ) {};

  ngOnInit(): void {
    this.click.getClicks().subscribe((tagName) => {
      this.selectedTag = tagName;
      if(tagName === 'todos os tópicos') {
        this.filteredPostsByTag = this.postCards;
        this.filteredPosts = this.postCards;
      } else {
        this.filterPostByTagName();
        this.filteredPosts = this.filteredPostsByTag;
      }
    });

    this.brochureCategory.getCategories()
    .subscribe((categoryName) => {
      this.selectedCategory = categoryName;
    })

    this.searchQuery.getQueries()
    .subscribe((query) => {
      if(this.selectedTag === 'brochura') {
        this.filterBrochuresByQuery(query);
        this.showBrochure404 = !Boolean(this.filteredBrochures?.length);
      } else {
        this.filterPostsByQuery(query);
        this.showPost404 = !Boolean(this.filteredPosts?.length);
      }
      if(!query) {
        this.filteredBrochures = this.brochures;
        this.filteredPosts = this.filteredPostsByTag;
        this.showBrochure404 = false;
        this.showPost404 = false;
      }
    })
    
    this.fecthPosts();
  }

  fecthPosts(): void {
    this.posts.posts$.subscribe((posts) => {
      if(posts) { 
        this.news = posts;
        this.brochures = this.news?.brochuras;
        this.postCards = this.news?.noticias;
        this.filteredBrochures =  this.brochures; 
        this.filteredPosts = this.postCards;
      }
    });
  }  

  filterBrochuresByQuery(queryToSearch: string | null): void {
    if (queryToSearch && this.brochures) {
      this.filteredBrochures = this.brochures.filter((brochure: any) => {
        return brochure.titulo_brochura
        .toLowerCase().includes(
            queryToSearch.toLowerCase()
          );
      });
    } else {
      this.filteredBrochures = [];
    }
  }

  filterPostsByQuery(queryToSearch: string | null): void {
    if (queryToSearch && this.filteredPostsByTag) {
      this.filteredPosts = this.filteredPostsByTag.filter((post: any) => {
        return post.titulo_noticia
        .toLowerCase().includes(
            queryToSearch.toLowerCase()
          );
      });
    } else {
      this.filteredPosts = [];
    }
  }
  
  filterPostByTagName(tagName = this.selectedTag) {
    if (this.postCards) {
      this.filteredPostsByTag = this.postCards?.filter((post: any) => {
      return post.categoria_noticia
      .toLowerCase() === tagName.toLowerCase();
      })
    } else {
      this.filteredPostsByTag = [];
    }
  }  

}
