import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    
    if(isPlatformBrowser(this.platformId)){
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

        const progressActivePath = document.getElementById('progress-active-path');
        if(progressActivePath) {
          console.log(progressActivePath)
          progressActivePath.style.width = `${scrollPercentage}%`;
        }
      });
    }
  }

}
