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
  
  removeproduct(x:string){
    console.log(x);
    this.httpClient.post(BACKEND_URL + '/productremove', x)
      .subscribe((data:any)=>{
        this.prods = data;
      })
  }
  updateproduct(){
    this.router.navigateByUrl("/updateproduct");
  }

}
