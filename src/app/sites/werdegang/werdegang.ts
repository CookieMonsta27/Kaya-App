import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-werdegang',
  imports: [],
  templateUrl: './werdegang.html',
  styleUrl: './werdegang.css',
})
export class WerdegangComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const entries = this.el.nativeElement.querySelectorAll('.entry') as NodeListOf<Element>;
    const observer = new IntersectionObserver(
      (observations) => {
        observations.forEach(obs => {
          if (obs.isIntersecting) {
            obs.target.classList.add('visible');
            observer.unobserve(obs.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    entries.forEach(entry => observer.observe(entry));
  }
}
