import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) {};

  firstBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  secondBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  thirdBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  fourthBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  fifthBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sixthBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  seventhBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  eigthBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ninethBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  tenthBoxServiceOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {};
  
  seeService(serviceTitle: string) {
    this.router.navigate(['/service-details', serviceTitle.toLowerCase()]);
  }

  opentab(position: string){
    switch(position){
      case 'first':
        this.firstBoxServiceOpened.next(!this.firstBoxServiceOpened.getValue());
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'second':
        this.secondBoxServiceOpened.next(!this.secondBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'third':
        this.thirdBoxServiceOpened.next(!this.thirdBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'fourth':
        this.fourthBoxServiceOpened.next(!this.fourthBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'fifth':
        this.fifthBoxServiceOpened.next(!this.fifthBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'sixth':
        this.sixthBoxServiceOpened.next(!this.sixthBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'seventh':
        this.seventhBoxServiceOpened.next(!this.seventhBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'eigth':
        this.eigthBoxServiceOpened.next(!this.eigthBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'nineth':
        this.ninethBoxServiceOpened.next(!this.ninethBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.tenthBoxServiceOpened.next(false);
        break;
      case 'tenth':
        this.tenthBoxServiceOpened.next(!this.tenthBoxServiceOpened.getValue());
        this.firstBoxServiceOpened.next(false);
        this.secondBoxServiceOpened.next(false);
        this.thirdBoxServiceOpened.next(false);
        this.fourthBoxServiceOpened.next(false);
        this.fifthBoxServiceOpened.next(false);
        this.sixthBoxServiceOpened.next(false);
        this.seventhBoxServiceOpened.next(false);
        this.eigthBoxServiceOpened.next(false);
        this.ninethBoxServiceOpened.next(false);
        break;
    }
  }

}
