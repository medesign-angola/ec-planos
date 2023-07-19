import { Component } from '@angular/core';

@Component({
  selector: 'app-segment-details',
  templateUrl: './segment-details.component.html',
  styleUrls: ['./segment-details.component.css']
})
export class SegmentDetailsComponent {
  description: string = 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral.';
  baseUrl: string = 'assets/images/segments/container/'
  cards: Card[] = [
    {
      imageSrc: this.baseUrl,
      title: 'Edifícios',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Urbanismo e Infraestrutura',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Ambiente',
      description: this.description
    }
  ];
}

export interface Card {
  imageSrc: string;
  title: string;
  description: string;
}

