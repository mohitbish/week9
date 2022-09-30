import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'addproduct', component: AddproductComponent},
  {path:'updateproduct', component: UpdateproductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
