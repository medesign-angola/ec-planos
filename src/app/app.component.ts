import { Component, ViewChild, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { SearchQueryService } from './search-query.service';
import { ClickService } from './click.service';
import { PostsService } from './posts.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {  
  constructor(
    private router: Router, 
    private searchQuery: SearchQueryService,
    private click: ClickService,
    private posts: PostsService,
    @Inject(PLATFORM_ID) private platformId: any
    ) {
      this.fecthPosts();
    };

  @ViewChild('l2', { static: false }) l2!: ElementRef<HTMLDivElement>;
  title = 'ec-planos';
  
  isMenuVisible: boolean = false;
  isMobileSearchAreaVisible: boolean = false;
  baseUrl = 'assets/images/segments';
  images: string[] = [
    this.baseUrl + '/container/1.png',
    this.baseUrl + '/container/2.png',
    this.baseUrl + '/container/3.png'
  ];

  currentSlide = 0;
  /** testing search for mobile */ 
  news: any;
  brochures: any;
  postCards: any;
  filteredPosts: any;
  filteredBrochures: any;
  filteredPostsByTag: any;
  fecthPosts(): void {
    this.posts.posts$.subscribe((posts) => {
      if(posts) { 
        this.news = posts;
        this.brochures = this.news?.brochuras;
        this.postCards = this.news?.noticias;
        this.filteredBrochures =  this.brochures; 
        this.filteredPosts = this.postCards;
      }
    });
  }  

  filterBrochuresByQuery(queryToSearch: string | null): void {
    if (queryToSearch && this.brochures) {
      this.filteredBrochures = this.brochures.filter((brochure: any) => {
        return brochure.titulo_brochura
        .toLowerCase().includes(
            queryToSearch.toLowerCase()
          );
      });
    } else {
      this.filteredBrochures = [];
    }
  }

  filterPostsByQuery(queryToSearch: string | null): void {
    if (queryToSearch && this.filteredPostsByTag) {
      this.filteredPosts = this.filteredPostsByTag.filter((post: any) => {
        return post.titulo_noticia
        .toLowerCase().includes(
            queryToSearch.toLowerCase()
          );
      });
    } else {
      this.filteredPosts = [];
    }
  }
  
  filterPostByTagName(tagName = this.selectedTag) {
    if (this.postCards) {
      this.filteredPostsByTag = this.postCards?.filter((post: any) => {
      return post.categoria_noticia
      .toLowerCase() === tagName?.toLowerCase();
      })
    } else {
      this.filteredPostsByTag = [];
    }
  }  


  selectedTag: string | null = null;
  query: string = '';
  
  onQueryChange(): void {
    console.log(this.query);
    if(this.selectedTag === null) {
      console.log(this.filterBrochuresByQuery(this.query));
    }
    else {
      //rest
    }
  }

  /** end of test */
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
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
    
  }

  isPostsOrPostDetails() {
    const macthRouteOptions = ['/posts', '/post-details'];
    return macthRouteOptions.includes(this.router.url);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleSubmenu(option: Option) {
    option.showSubmenu = true; 
    this.l2.nativeElement.classList.add('l2');  
    this.l2.nativeElement.classList.remove('l2-invisible');
  }

  toggleMobileSearchArea() {
    this.isMobileSearchAreaVisible = !this.isMobileSearchAreaVisible;
    this.click.getClicks().subscribe((tagName) => {
      this.selectedTag = tagName;
    });
  }

  goBack(option: Option) {
    if(isPlatformBrowser(this.platformId)){
      const subOptions = document.querySelector('.l2-visible') as HTMLDivElement;
      this.l2.nativeElement.classList.remove('l2');   
      this.l2.nativeElement.classList.add('l2-invisible'); 
      this.l2.nativeElement.innerHTML = subOptions.innerHTML;
      option.showSubmenu = false;
    }
  } 

  closeMenu() {
    if(isPlatformBrowser(this.platformId)){
      const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
      menuToggle.checked = this.isMenuVisible = false;
    }
  }

  firstLayerOptions: Option[] = [
    // Don't delete this(kludge)
    // TODO: Refactor logic here
    {},
    {
      label: 'EC-Panos',
      secondLayerOptions: [
        { label: 'Sobre nós', link: '/about' },
        { label: 'História', link: '/' },
        { label: 'Cultura', link: '/' },
        { label: 'Qualidade', link: '/' },
        { label: 'Clientes e Parceiros', link: '/' },
        { label: 'Carreira', link: '/' }
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
}


interface SecondLayerOption {
  label: string;
  link: string;
}

interface Option {
  label?: string;
  secondLayerOptions?: Array<SecondLayerOption>;
  showSubmenu?: boolean;
}
