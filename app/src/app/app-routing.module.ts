import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'addproduct', component: AddproductComponent},
  {path:'removeproduct', component: RemoveproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
