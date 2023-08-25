import { Component, OnInit } from '@angular/core';
import { ClickService } from 'src/app/click.service';
import { Post, PostsService } from 'src/app/posts.service';

@Component({
  selector: 'posts-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  brochureBaseUrl: string = 'assets/images/posts/container/';
  selectedTag = 'todos os tópicos';
  news: Post | null = null;
  brochures: any;

  constructor(
    private click: ClickService, 
    private posts: PostsService) {};

  ngOnInit(): void {
    this.click.getClicks().subscribe((tagName) => {
      this.selectedTag = tagName;
    });

    this.fecthPosts();
  }
  
  fecthPosts(): void {
    this.posts.posts$.subscribe((posts) => {
      if(posts) { 
        this.news = posts;
        this.brochures = this.news?.brochuras;
        console.log(this?.brochures);
      }
    });
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