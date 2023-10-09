import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() {};


  services: Service[] = [
    { 
      titulo: 'Estudos Prévios',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png'
    },
    
    { 
      titulo: 'Projectos de Execução',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png' 
    },
    
    { 
      titulo: 'As Build / Telas finais',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png' 
    },
    
    { 
      titulo: 'Fiscalização de Obras',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png' 
    },
    
    { 
      titulo: 'Projectos de Execução',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png' 
    },
    
    { 
      titulo: 'Levantamentos Topográficos',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png' 
    },
    
    { 
      titulo: 'Estudos de Mercado',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png'  
    },
    
    { 
      titulo: 'Estudos de Viabilidade Físicos e Financeiros',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png'
    },
    
    { 
      titulo: 'Laudos técnicos',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png'
    },
    
    { 
      titulo: 'Planos de Manutenção',
      briefing: 'Para nós existe uma linha visível na nossa relação com os clientes, fornecedores, colaboradores, parceiros e sociedade em geral',
      descricao: '',
      imagem: 'assets/images/home/services/service-image-1.png' 
    } 
  ]

  getServices() { // I should use this to populate in the home section for service(in case of refactor)
    return this.services;
  }

  getServiceByTitle(titulo: string): Service | undefined  {
    return this.services?.find(
      (service: Service) => service.titulo === titulo
      )
  }
}

interface Service {
  titulo: string
  briefing: string
  descricao: string
  imagem: string
}

