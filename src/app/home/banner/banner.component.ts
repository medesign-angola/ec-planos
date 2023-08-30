import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  constructor() {};

  ngOnInit(): void {
  let stack = document.querySelector(".stack");
  if(stack)
  [...stack.children].reverse().forEach(i => stack?.append(i));
  
  stack?.addEventListener("click", swap);
  
  function swap(e:Event) {
    let card = document.querySelector(".card:last-child") as HTMLImageElement;
    if (e.target !== card) return;  
    card.classList.add("animate");
    
    setTimeout(() => {
      card.classList.remove("animate");
      stack?.prepend(card);
    }, 700);
  }
  }

}
