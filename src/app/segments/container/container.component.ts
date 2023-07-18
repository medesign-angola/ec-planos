import { Component } from '@angular/core';

@Component({
  selector: 'segments-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
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
    },
    {
      imageSrc: this.baseUrl,
      title: 'Água',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Energias',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Agronegócio',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Petróleo e Gás',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Transporte',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Infraestruturas',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Construção',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Projeto',
      description: this.description
    }
  ];
}

export interface Card {
  imageSrc: string;
  title: string;
  description: string;
}


