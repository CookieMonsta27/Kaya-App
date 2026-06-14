import { Routes } from '@angular/router';
import { Home } from './sites/home/home';
import { AboutMeComponent } from './sites/about-me/about-me';
import { WerdegangComponent } from './sites/werdegang/werdegang';
import { PortfolioComponent } from './sites/portfolio/portfolio';
import { ImpressumComponent } from './footer-component/pages/impressum/impressum';
import { DatenschutzComponent } from './footer-component/pages/datenschutz/datenschutz';
import { AgbComponent } from './footer-component/pages/agb/agb';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'werdegang', component: WerdegangComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'agb', component: AgbComponent },
];
