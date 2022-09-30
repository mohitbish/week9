import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ProdModel } from '../ProdModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  Name:string|null = "";
  prods: ProdModel[] = [];
  constructor(private router:Router,  private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('prod.Name'))
    this.Name = sessionStorage.getItem('prod.Name');
    this.getProduct()

  }
  
  getProduct(){
    let x = this.Name
    this.httpClient.post(BACKEND_URL + '/productfind1', x)
      .subscribe((data:any)=>{
        this.prods = data;
      })
  }

}
