import { Routes } from '@angular/router';
import { Home } from './sites/home/home';
import { AboutMeComponent } from './sites/about-me/about-me';
import { PortfolioComponent } from './sites/portfolio/portfolio';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
