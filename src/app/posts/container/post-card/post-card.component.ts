import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent {
  @Input() imageSrc: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() avgReadingTime: string = '';
  @Input() briefing: string = '';

  avgReadingTimeCalc(text: string) {
    // Conta o número de palavras no texto (separadas por espaços em branco)
    const words = text.split(/\s+/).length;
  
    // Define a média de leitura em palavras por minuto
    const wordsPerMin = 10;
  
    // Calcula o tempo de leitura em minutos
    const avgReadingTimePerMin = words / wordsPerMin;
  
    // Verifica se o tempo de leitura é maior ou igual a 60 minutos (1 hora)
    if (avgReadingTimePerMin >= 60) {
      // Calcula o tempo de leitura em horas e minutos
      const hh = Math.floor(avgReadingTimePerMin / 60);
      const mm = Math.round(avgReadingTimePerMin % 60);
  
      return `${hh} horas de leitura`;
      // return `${hh} horas e ${mm} minutos de leitura`;
    } else {
      // Calcula o tempo de leitura em minutos e segundos
      const mm = Math.floor(avgReadingTimePerMin);
      const ss = Math.round((avgReadingTimePerMin - mm) * 60);
      
      return `${mm} minutos de leitura`;
      // return `${mm} minutos e ${ss} segundos de leitura`;
    }
  }

  
}

