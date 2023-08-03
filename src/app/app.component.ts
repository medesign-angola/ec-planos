import { Component, ViewChild, ElementRef } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterState } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {};
  
  title = 'ec-planos';
  
  submenu: boolean = false;
  isMenuVisible: boolean = false;
  
  ngOnInit() {
    AOS.init({
      offset: 70,
      duration: 900,
      easing: 'ease-in-out-cubic',
      delay: 100,
    });
  }
  isPostsOrPostDetails() {
    const macthOptions = ['/posts', '/post-details'];
    return macthOptions.includes(this.router.url);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleSubmenu() {
    this.submenu = !this.submenu;
    this.l2.nativeElement.classList.add('l2');
    
  }

  @ViewChild('l2', { static: true }) l2!: ElementRef<HTMLDivElement>;

  goBack() {    
    this.submenu = false;
    this.l2.nativeElement.classList.remove('l2');
    this.l2.nativeElement.classList.add('l2-invisible');
  } 

  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    menuToggle.checked = this.isMenuVisible = this.submenu = false;

  }
}

