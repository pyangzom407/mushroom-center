import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared/home/home.component";
import {ServicesComponent} from "./shared/services/services.component";
import {ShopComponent} from "./shared/shop/shop.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
