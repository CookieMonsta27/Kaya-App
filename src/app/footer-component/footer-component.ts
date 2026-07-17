import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeatureFlagsService } from '../feature-flags.service';

@Component({
  selector: 'footer-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  constructor(public featureFlags: FeatureFlagsService) {}
  company = {
    name: 'Kaya Makes',
    legalForm: 'Yvonne Beck',
    addressLine1: 'Musterstraße 1',
    postal: '12345 Musterstadt',
    country: 'Deutschland',
    phone: '+49 123 456789',
    email: 'info@example.com',
    managingDirector: 'Max Mustermann',
    hrb: 'HRB 12345',
    registryCourt: 'Amtsgericht Musterstadt',
    vatId: 'DE123456789',
  };

  nowYear = new Date().getFullYear();
}
