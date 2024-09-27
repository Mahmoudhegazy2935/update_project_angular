import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { ContactUSComponent } from './components/contact-us/contact-us.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditComponent } from './components/edit/edit.component';
import { CartComponent } from './components/cart/cart.component';
import { UserHomeComponent } from './components/userpages/user-home/user-home.component';
import { UserSingleproductComponent } from './components/userpages/user-singleproduct/user-singleproduct.component';
import { UserCartComponent } from './components/userpages/user-cart/user-cart.component';

export const routes: Routes = [
  // admin:pages
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, title: 'home' },
  // { path: 'home/:id', component: SingleProductComponent },
  // { path: 'edit/:id', component: EditComponent },
  // { path: 'edit', component: EditComponent },
  // { path: 'aboutus', component: AboutUSComponent, title: 'aboutus' },
  // { path: 'contactus', component: ContactUSComponent, title: 'contactus' },
  // { path: 'cart', component: CartComponent },
  // { path: '**', component: NotfoundComponent },


  //user:pages
  { path: '', redirectTo: '/userhome', pathMatch: 'full' },
  { path: 'userhome', component: UserHomeComponent, title: 'home' },
  { path: 'userhome/:id', component: UserSingleproductComponent },
  { path: 'usercart', component: UserCartComponent },
  { path: 'aboutus', component: AboutUSComponent, title: 'aboutus' },
  { path: 'contactus', component: ContactUSComponent, title: 'contactus' },
  { path: '**', component: NotfoundComponent },
];
