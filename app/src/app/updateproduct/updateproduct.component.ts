import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ProdModel } from '../ProdModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Double } from 'mongodb';

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

  
  Name = " ";
  Description: String = " ";
  Price = 0;
  units = 0;
  oprods = {Name: this.Name, Price: this.Price, units: this.units, Description: this.Description};
  prods= {Name: this.Name, Price: this.Price, units: this.units, Description: this.Description};
  constructor(private router:Router,  private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.prods = JSON.parse(localStorage.getItem('prod')!);
    console.log((this.prods.Name))
    this.Name = this.prods.Name
    this.Price = this.prods.Price
    this.units = this.prods.units
    this.Description = this.prods.Description
    //this.getProduct()

  }

  updateproduct(){
    let Nprods = {Name: this.Name, Price: this.Price, units: this.units, Description: this.Description};
    const prod = {new : Nprods, old: this.prods};
    this.httpClient.post(BACKEND_URL + '/productupdate', prod , httpOptions)
      .subscribe((data:any)=>{
        
      })
  }
  
  

}
