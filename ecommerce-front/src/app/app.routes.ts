import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrerPageComponent } from './pages/registrer-page/registrer-page.component';

export const routes: Routes = [

    { path: '', component: HomePageComponent },
    {path: "product/:id", component: DetailProductPageComponent},
    {path:"login", component: LoginPageComponent},
    {path:"registrer", component:RegistrerPageComponent},
    { path: '**', component: PageNotFoundComponent },
];
