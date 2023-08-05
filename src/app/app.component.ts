import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  constructor(private router: Router) {};
  @ViewChild('l2', { static: false }) l2!: ElementRef<HTMLDivElement>;
  title = 'ec-planos';
  
  submenu: boolean = false;
  isMenuVisible: boolean = false;

  images: string[] = [
    'assets/images/segments/container/1.png',
    'assets/images/segments/container/2.png',
    'assets/images/segments/container/3.png'
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  ngOnInit() {
    AOS.init({
      offset: 70,
      duration: 900,
      easing: 'ease-in-out-cubic',
      delay: 100,
    });

    setInterval(() => {
      this.nextSlide();
    }, 5000);
    
  }

  isPostsOrPostDetails() {
    const macthOptions = ['/posts', '/post-details'];
    return macthOptions.includes(this.router.url);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  /*toggleSubmenu() {
    this.submenu = !this.submenu;
    this.l2.nativeElement.classList.add('l2');
    
  }*/

  toggleSubmenu(option: Option) {
    option.showSubmenu = !option.showSubmenu;
    this.l2.nativeElement.classList.add('l2');
  }

  

  goBack(option: Option) {    
    option.showSubmenu = !option.showSubmenu;
    //this.l2.nativeElement.classList.remove('l2');
    //this.l2.nativeElement.classList.add('l2-invisible');

  } 

  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    menuToggle.checked = this.isMenuVisible = this.submenu = false;

  }

  firstLayerOptions: Option[] = [
    {
      label: 'EC-Panos',
      secondLayerOptions: [
        { label: 'Sobre nós', link: '/about' },
        { label: 'História', link: '/segments' },
        { label: 'Cultura', link: '/specialities' },
        { label: 'Qualidade', link: '/home' },
        { label: 'Clientes e Parceiros', link: '/projects' },
        { label: 'Carreira', link: '/contact' }
      ],
      showSubmenu: false
    },
    {
      label: 'Seguimentos',
      secondLayerOptions: [
        { label: 'Edifícios', link: '/' },
        { label: 'Urbanismo & Infraestruras', link: '/' },
        { label: 'Ambiente', link: '/' },
        { label: 'Água', link: '/' },
        { label: 'Energias', link: '/' },
        { label: 'Agronegócio', link: '/' },
        { label: 'Petróleo e Gás', link: '/' },
        { label: 'Transporte', link: '/' }
      ],
      showSubmenu: false
    },{
      label: 'Especialidades',
      secondLayerOptions: [
        { label: 'Arquitetura', link: '/' },
        { label: 'Hidráulica', link: '/' },
        { label: 'Fundações & Estruturas', link: '/' },
        { label: 'Vias de Comunicação', link: '/' },
        { label: 'Eletricidade', link: '/' },
        { label: 'Telecomunicações', link: '/' },
        { label: 'Estruturas Metálicas', link: '/' },
        { label: 'Infraestruturas de Transportes', link: '/' }
      ],
      showSubmenu: false
    },
    {
      label: 'Serviços',
      secondLayerOptions: [
        { label: 'Estudos Prévios', link: '/' },
        { label: 'Projectos de Licenciamentos', link: '/' },
        { label: 'Projectos de Execução', link: '/' },
        { label: 'As Build/Telas finais', link: '/' },
        { label: 'Fiscalização de Obras', link: '/' },
        { label: 'Levantamentos Topográficos', link: '/' },
        { label: 'Estudos de Mercado', link: '/' },
        { label: 'Estudos de Viabilidade Físico e Financeiro', link: '/' },
        { label: 'Laudos Técnicos', link: '/' },
        { label: 'Planos de Manutenção', link: '/' }
      ],
      showSubmenu: false
    }
  ];
  
  /*toggleSubmenu(option: Option) {
    this.submenu = !this.submenu;
    this.l2.nativeElement.classList.add('l2');
  }*/

}


interface SecondLayerOption {
  label: string;
  link: string;
}

interface Option {
  label: string;
  secondLayerOptions: SecondLayerOption[];
  showSubmenu: boolean;
}