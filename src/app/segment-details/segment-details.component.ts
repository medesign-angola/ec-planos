import { Component } from '@angular/core';

@Component({
  selector: 'app-segment-details',
  templateUrl: './segment-details.component.html',
  styleUrls: ['./segment-details.component.css']
})
export class SegmentDetailsComponent {
  description: string = 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral.';
  baseUrl: string = 'assets/images/segment-details/container/'
  cards: Card[] = [
    {
      imageSrc: this.baseUrl,
      title: 'Hidráulica',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Electricidade',
      description: 'Seja uma casa, um sistema informatizado, um estudo/pesquisa, um trabalho de conclusão de curso'
    },
    {
      imageSrc: this.baseUrl,
      title: 'Arquitectura',
      description: 'É o conjunto de serviços fundamentais para o desenvolvimento socieconômico de uma região tais como saneamento'
    }
  ];
}

export interface Card {
  imageSrc: string;
  title: string;
  description: string;
}

