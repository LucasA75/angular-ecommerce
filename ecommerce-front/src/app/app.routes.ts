import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';

export const routes: Routes = [

    { path: '', component: HomePageComponent },
    {path: "product/:id", component: DetailProductPageComponent},
    { path: '**', component: PageNotFoundComponent },
];
