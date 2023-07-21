import { Component, Input } from '@angular/core';

@Component({
  selector: 'projects-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
@Input() title: string = '';
@Input() description: string = '';
@Input() imageSrc: string = ''; 
}
