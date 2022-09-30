import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  Name = " ";
  Description = " ";
  Price = 0;
  units = 0;
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  

  addproduct(){
    let prod = {Name: this.Name, Description: this.Description, Price: this.Price, units: this.units}
    this.httpClient.post(BACKEND_URL + '/productadd', prod, httpOptions)
      .subscribe((data:any)=>{
        console.log(data);
        alert("added");
        this.router.navigateByUrl("/products");
      })
  }

}
