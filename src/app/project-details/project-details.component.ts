import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectsComponent {
  suggestionBaseUrl: string = 'assets/images/projects/suggestions/'
  sectionBaseUrl: string = 'assets/images/projects/sections/'
  
  suggestions: Suggestion[] = [
    {
      title: 'Titulo sugestivo aqui',
      description: "Partindo do pressuposto de um país grande e belo, a EC-Planos, Consultores De Projectos, Lda. nasce da ideia de uma Angola de sonhos, sumptuosa, com perspectivas e bases desenvolvidas para um mercado cada dia mais atrativo, competitivo e com novas oportunidades.",
      imageSrc: this.suggestionBaseUrl
    },
    {
      title: 'Titulo sugestivo aqui',
      description: "Partindo do pressuposto de um país grande e belo, a EC-Planos, Consultores De Projectos, Lda. nasce da ideia de uma Angola de sonhos, sumptuosa, com perspectivas e bases desenvolvidas para um mercado cada dia mais atrativo, competitivo e com novas oportunidades.",
      imageSrc: this.suggestionBaseUrl
    }
  ]

  sections: Section[] = [
    {
      description: "Partindo do pressuposto de um país grande e belo, a EC-Planos, Consultores De Projectos, Lda. nasce da ideia de uma Angola de sonhos, sumptuosa, com perspectivas e bases desenvolvidas para um mercado cada dia mais atrativo, competitivo e com novas oportunidades.",
      imageSrc: this.sectionBaseUrl
    },
    {
      description: "Partindo do pressuposto de um país grande e belo, a EC-Planos, Consultores De Projectos, Lda. nasce da ideia de uma Angola de sonhos, sumptuosa, com perspectivas e bases desenvolvidas para um mercado cada dia mais atrativo, competitivo e com novas oportunidades.",
      imageSrc: this.sectionBaseUrl
    }
  ]
}

export interface Suggestion {
  title: string
  description: string
  imageSrc: string
}

export interface Section extends Omit<Suggestion, 'title'> {

}