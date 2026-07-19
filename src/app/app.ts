import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';
import { MenuComponent } from './menu-component/menu-component';
import { FooterComponent } from './footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          [style({ position: 'relative', width: '100%' })],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0, transform: 'translateY(12px)' })],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [animate('320ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0, transform: 'translateY(-12px)' }))],
            { optional: true }
          ),
          query(
            ':enter',
            [animate('320ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class App {
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // Scroll to top on each completed navigation
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated
      ? outlet.activatedRoute?.routeConfig?.path ?? ''
      : '';
  }
}
