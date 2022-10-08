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

  prods: ProdModel[] = [];
  
  constructor(private router:Router,  private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.prods = JSON.parse(localStorage.getItem('prod')!);
    console.log(JSON.parse(localStorage.getItem('prod')!))
    //this.getProduct()

  }
  
  

}
