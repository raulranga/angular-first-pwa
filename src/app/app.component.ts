import { Component, inject, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {SwUpdate, VersionEvent} from "@angular/service-worker";
import { NgFor } from "@angular/common";

import { ProfileCardComponent } from "./components/profile-card/profile-card.component";
import { BrewModel } from "./models/brew.model";

enum VersionEventTypes {
  versionDetected = "VERSION_DETECTED",
  versionReady = "VERSION_READY",
  versionInstallationFailed = "VERSION_INSTALLATION_FAILED",
  noNewVersion = "NO_NEW_VERSION_DETECTED"
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    ProfileCardComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private swUpdate = inject(SwUpdate)

  protected breweries!: BrewModel[];

  title = 'angular-first-pwa';

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.pipe(
      ).subscribe((versionEvent: VersionEvent) => {
        if (versionEvent.type === VersionEventTypes.versionDetected && confirm("New version available. Load new version?")) {
          window.location.reload();
        }
      });
    }

  }
}
