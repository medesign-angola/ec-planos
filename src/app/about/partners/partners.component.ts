import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  constructor(private http: HttpClient) {};
  partners: Array<string> | null = null;
  
  ngOnInit(): void {
    const apiUrl = 'http://localhost/ec_planos_wp_api/wp-json/wp/v2/pages/?slug=clientes'; 
    this.http.get(apiUrl).subscribe((response: any) => {
      this.partners = response['0'].acf.clientes.map((el: Cliente) => el.cliente);
    });
  } 
}

type Cliente = { cliente: string };