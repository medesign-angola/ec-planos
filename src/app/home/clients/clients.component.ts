import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  main_path: string = 'assets/svg/logo/about/partners/';

  partners: string[] = [
    this.main_path + '1.svg',
    this.main_path + '2.svg',
    this.main_path + '3.svg',
    this.main_path + '4.svg',
    this.main_path + '5.svg',
    this.main_path + '6.svg',
    this.main_path + '7.svg',
    this.main_path + '8.svg',
    this.main_path + '9.svg',
    this.main_path + '10.svg',
    this.main_path + '11.svg',
    this.main_path + '12.svg',
    this.main_path + '13.svg',
    this.main_path + '14.svg',
    this.main_path + '15.svg',
    this.main_path + '16.svg',
    this.main_path + '17.svg',
  ];
  
}
