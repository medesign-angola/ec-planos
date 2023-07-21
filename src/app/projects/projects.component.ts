import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  baseUrl: string = 'assets/images/projects/suggestions/'
  
  suggestions: Suggestion[] = [
    {
      title: 'Titulo sugestivo aqui',
      description: "Partindo do pressuposto de um país grande e belo, a EC-Planos, Consultores De Projectos, Lda. nasce da ideia de uma Angola de sonhos, sumptuosa, com perspectivas e bases desenvolvidas para um mercado cada dia mais atrativo, competitivo e com novas oportunidades.",
      imageSrc: this.baseUrl
    },
    {
      title: 'Titulo sugestivo aqui',
      description: "Partindo do pressuposto de um país grande e belo, a EC-Planos, Consultores De Projectos, Lda. nasce da ideia de uma Angola de sonhos, sumptuosa, com perspectivas e bases desenvolvidas para um mercado cada dia mais atrativo, competitivo e com novas oportunidades.",
      imageSrc: this.baseUrl
    }
  ]
}

export interface Suggestion {
  title: string
  description: string
  imageSrc: string
}
