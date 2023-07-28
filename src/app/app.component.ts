import { Component, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ec-planos';

  ngOnInit() {
    AOS.init();
  }

  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  @ViewChild('menu', { static: true }) menu!: ElementRef;

  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    menuToggle.checked = false;
    /*
    const menu = this.menu.nativeElement;
    menu.classList.remove('menu-visible');*/
    this.isMenuVisible = false;

  }
}
