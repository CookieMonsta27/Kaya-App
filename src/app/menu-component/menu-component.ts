import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'menu-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {
  constructor(public theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggle();
  }
}
