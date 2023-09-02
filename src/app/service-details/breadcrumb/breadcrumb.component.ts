import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'service-details-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent {
  constructor(private router: ActivatedRoute, private location: Location) {};
  
  service: string = '';
  
  ngOnInit() {
      
      this.router.params.subscribe((params) => {
        this.service = this.pascalCase(params['serviceTitle']);
      })
      
      this.router.fragment.subscribe((fragment) => {
        alert(fragment+' tuix');
      })
  }

  navigateBack() {
    this.location.back();
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

