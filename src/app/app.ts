import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu-component/menu-component';
import { FooterComponent } from './footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
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
}
