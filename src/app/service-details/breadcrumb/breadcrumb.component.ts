import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'service-details-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent {
  constructor(private router: ActivatedRoute) {};
  
  service: string = '';
  
  ngOnInit() {
      this.router.params.subscribe((params) => {
        this.service = this.pascalCase(params['serviceTitle']);
      })
  }

  pascalCase(phrase: string) {
    return phrase
    .split(' ')
    .map(
      word => word.charAt(0)!=='o' 
      ? word.charAt(0).toUpperCase() + word.slice(1) 
      : word)
    .join(' ');
  }

}

