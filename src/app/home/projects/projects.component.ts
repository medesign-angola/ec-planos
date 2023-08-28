import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  
  ngOnInit(): void {
    
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
