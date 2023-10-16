import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'about-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  constructor(private http: HttpClient) {};
  partners: Array<string> | null = null;
  
  ngOnInit(): void {
    const apiUrl = environment.backoffice + 'pages/?slug=clientes';
    this.http.get(apiUrl).subscribe((response: any) => {
      console.log(response);
      this.partners = response['0'].acf.clientes.map((el: Cliente) => el.cliente);
    });
  } 
}

type Cliente = { cliente: string }; 