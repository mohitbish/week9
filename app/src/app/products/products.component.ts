import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProdModel } from '../ProdModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  prods: ProdModel[] = [];
  uprods: ProdModel[] = [];
  constructor(private router:Router,  private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<ProdModel[]>(BACKEND_URL + '/productfind')
      .subscribe((data:any)=>{
        this.prods = data;
        console.log(data);
      })
  }
  
  removeproduct(prod:ProdModel){
    this.httpClient.post(BACKEND_URL + '/productremove', prod)
      .subscribe((data:any)=>{
        this.prods = data;
      })
  }

  updateproduct(Prod:ProdModel){
    this.httpClient.post(BACKEND_URL + '/productfind1', Prod)
      .subscribe((data:any)=>{
        this.uprods = data[0];
        console.log(this.uprods)
        localStorage.setItem('prod', JSON.stringify(this.uprods));
        this.router.navigateByUrl("/updateproduct");
      })
  }

}
