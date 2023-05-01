import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { LoginComponent } from './views/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { LoginProductsGuard } from './guard/login-products.guard';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
}, 
  {
  path: "login",
  component: LoginComponent
}, 
  {
  path: "about",
  component: AboutComponent
}, 
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent,
  canActivate: [LoginProductsGuard]
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }