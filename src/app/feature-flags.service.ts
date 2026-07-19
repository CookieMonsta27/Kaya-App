import { Injectable, signal } from '@angular/core';

export type FeatureFlagName = 'footer' | 'instagramButton';

@Injectable({ providedIn: 'root' })
export class FeatureFlagsService {
  private readonly flags = signal<Record<FeatureFlagName, boolean>>({
    footer: false,
    instagramButton: false,
  });

  isEnabled(flag: FeatureFlagName): boolean {
    return this.flags()[flag];
  }

  setFeature(flag: FeatureFlagName, enabled: boolean): void {
    this.flags.update(current => ({ ...current, [flag]: enabled }));
  }

  toggleFeature(flag: FeatureFlagName): void {
    this.setFeature(flag, !this.isEnabled(flag));
  }
}
