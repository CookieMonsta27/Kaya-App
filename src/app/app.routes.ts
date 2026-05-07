import { Routes } from '@angular/router';
import { Home } from './sites/home/home';
import { AboutMeComponent } from './sites/about-me/about-me';
import { WerdegangComponent } from './sites/werdegang/werdegang';
import { PortfolioComponent } from './sites/portfolio/portfolio';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'werdegang', component: WerdegangComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
