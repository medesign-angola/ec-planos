import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts = new BehaviorSubject<any | null>(null);
  posts$: Observable<any | null> = this.posts.asObservable();

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    const apiUrl = 'http://localhost/ec_planos_wp_api/wp-json/wp/v2/pages/?slug=noticias'; 
    this.http.get<any>(apiUrl).subscribe(
      (posts: any) => {
        this.posts.next(posts['0'].acf);
        //console.log(this.posts);
      },
      (error: Error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }


  getPosts() {
    return this.posts;
  }

  getPostByName(postName: string): Observable<Post | null> {
    return this.posts.pipe(
      map((posts:any) => posts?.find((posts:any) => posts.titulo_apresentacao === postName))
    );
  }
}


export interface Post {
  noticias: {

  },
  brochuras: {
    ficheiro_brochura?: string
		titulo_brochura: string
		data_brochura: string
		imagem_brochura: string
    categoria: string
  }
}
