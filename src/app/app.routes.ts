import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
  {path:' cart',component:CartComponent},
  {path:'app-bar',component:NavbarComponent},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',redirectTo:''}//redirection vers la page d'acceuil pour les URL inconnues
];
