import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  theme = signal<'dark' | 'light'>('dark');

  toggle() {
    this.theme.update(value => (value === 'dark' ? 'light' : 'dark'));
    this.applyTheme();
  }

  isDark() {
    return this.theme() === 'dark';
  }

  applyTheme() {
    const body = this.document.body;
    body.classList.toggle('dark-mode', this.isDark());
    body.classList.toggle('light-mode', !this.isDark());
  }

  constructor() {
    this.applyTheme();
  }
}
