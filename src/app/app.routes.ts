import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { ContactUSComponent } from './components/contact-us/contact-us.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'home/:id', component: SingleProductComponent },
  { path: 'aboutus', component: AboutUSComponent, title: 'aboutus' },
  { path: 'contactus', component: ContactUSComponent, title: 'contactus' },
  { path: '**', component: NotfoundComponent },
];
