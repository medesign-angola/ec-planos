import { Component } from '@angular/core';

@Component({
  selector: 'posts-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  brochureBaseUrl: string = 'assets/images/posts/container/';

  brochures: Brochure[] = [
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
  ]
}

export interface Brochure {
  imageSrc: string
  date: string
  title: string
}