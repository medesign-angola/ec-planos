import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'projects-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  constructor(private http: HttpClient) {};
  cards: Array<Project> | null = null;
  
  ngOnInit(): void {
    const apiUrl = 'http://localhost/ec_planos_wp_api/wp-json/wp/v2/pages/?slug=projectos'; 
    this.http.get(apiUrl).subscribe((response: any) => {
      this.cards = response['0'].acf.projectos;
    });
  } 

//type Cliente = { cliente: string };

  description: string = 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral.';
  baseUrl: string = 'assets/images/segments/container/'
  _cards: Card[] = [
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
    /*{
      imageSrc: this.baseUrl,
      title: 'Construção',
      description: this.description
    },
    {
      imageSrc: this.baseUrl,
      title: 'Projeto',
      description: this.description
    }*/
  ];
}

interface Project {
  briefing: string
  descricao_area_1: string
  descricao_area_2: string
  equipa: string
  imagem_apresentacao: string
  imagem_area_1: string
  imagem_area_2: string
  imagem_capa: string
  imagem_informacao_adicional_1: string
  imagem_informacao_adicional_2: string
  informacao_adicional_1: string
  informacao_adicional_2: string
  seguimento: string
  titulo_apresentacao: string
  titulo_projecto: string
}
export interface Card {
  imageSrc: string;
  title: string;
  description: string;
}
