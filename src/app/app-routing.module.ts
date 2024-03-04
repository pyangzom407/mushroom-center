import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../libs/shared/home/home.component";
import {ServicesComponent} from "../libs/shared/services/services.component";
import {ShopComponent} from "../libs/shared/shop/shop.component";
import { FormsComponent } from 'src/libs/shared/forms/forms.component';

//routing
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
  },
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
