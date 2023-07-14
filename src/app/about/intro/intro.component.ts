import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'about-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  missionLabel: string = 'Ler mais';
  visionLabel: string = 'Ler mais';
  valuesLabel: string = 'Ler mais';

  sliderPosition: BehaviorSubject<number> = new BehaviorSubject<number>(0); 

  isMissionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isVisionActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isValuesActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isMissionExtended: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isVisionExtended: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isValuesExtended: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
  }

  toggleExtend(area: string){
    switch(area){
      case 'mission':
        if(!this.isMissionExtended.getValue()){
          this.isMissionExtended.next(true);
          this.missionLabel = 'Ler menos';
        }else{
          this.isMissionExtended.next(false);
          this.missionLabel = 'Ler mais';
        }

        break;
      case 'vision':
        if(!this.isVisionExtended.getValue()){
          this.isVisionExtended.next(true);
          this.visionLabel = 'Ler menos';
        }else{
          this.isVisionExtended.next(false);
          this.visionLabel = 'Ler mais';
        }
        break;
      case 'values':
        if(!this.isValuesExtended.getValue()){
          this.isValuesExtended.next(true);
          this.valuesLabel = 'Ler menos';
        }else{
          this.isValuesExtended.next(false);
          this.valuesLabel = 'Ler mais';
        }
        break;
      default:
        break;
    }
  }

  lineTabSlideTo(elementOffsetLeft: number){
    // console.log(elementOffsetLeft);
    this.sliderPosition.next(elementOffsetLeft);
  }

  scrollToTab(area: string){
    if(isPlatformBrowser(this.platformId)){
      let areaTab = document.querySelector(`.${area}-tab`) as HTMLElement;
      this.lineTabSlideTo(areaTab.offsetLeft);
    }
  }

  tabToView(area: string){

    this.scrollToTab(area);

    switch(area){
      case 'mission':
        this.isMissionActive.next(true);
        this.isVisionActive.next(false);
        this.isValuesActive.next(false);
        break;
      case 'vision':
        this.isMissionActive.next(false);
        this.isVisionActive.next(true);
        this.isValuesActive.next(false);
        break;
      case 'values':
        this.isMissionActive.next(false);
        this.isVisionActive.next(false);
        this.isValuesActive.next(true);
        break;
      default:
        break;
    }
  }

}
