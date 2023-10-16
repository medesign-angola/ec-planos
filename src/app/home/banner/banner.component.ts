import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {
  Carousel,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {};

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      // initTE({ Carousel });
      let stack = document.querySelector(".stack") as HTMLDivElement;
      let nextBtn = document.querySelector(".down");
    
      if (stack && nextBtn) {
        [...stack.children].reverse().forEach(i => stack.append(i));
    
        nextBtn.addEventListener("click", swap);
    
        function swap() {
          let card = document.querySelector(".card:last-child");
          if (card) {
            card.classList.add("animate");
    
            setTimeout(() => {
              card?.classList.remove("animate");
              //@ts-ignore
              stack.prepend(card);
            }, 700);
          }
  
          
        } 
        function hi() { console.log('hi'); }
      }
    }
}

}
