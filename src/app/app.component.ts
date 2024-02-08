import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor} from "@angular/common";

import {tap} from "rxjs";

import {initFlowbite} from "flowbite";

import {ProfileCardComponent} from "./components/profile-card/profile-card.component";
import {MyDataServiceService} from "./services/my-data-service.service";
import {BrewModel} from "./models/brew.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    ProfileCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private dataService = inject(MyDataServiceService);
  protected breweries!: BrewModel[];

  title = 'angular-first-pwa';

  ngOnInit() {
    initFlowbite();
    this.dataService.getBreweries().pipe(
      tap((breweries) => {
        this.breweries = breweries;
      })
    ).subscribe();
  }
}
