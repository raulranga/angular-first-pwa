import {Component, inject, OnInit} from '@angular/core';
import {ProfileCardComponent} from "../profile-card/profile-card.component";
import {tap} from "rxjs";
import {MyDataServiceService} from "../../services/my-data-service.service";
import {BrewModel} from "../../models/brew.model";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-breweries',
  standalone: true,
  imports: [ProfileCardComponent, NgFor],
  templateUrl: './breweries.component.html',
  styleUrl: './breweries.component.scss'
})
export class BreweriesComponent implements OnInit{
  private dataService: MyDataServiceService = inject(MyDataServiceService);

  protected breweries!: BrewModel[];

  ngOnInit() {
    this.dataService.getBreweries().pipe(
      tap((breweries) => {
        this.breweries = breweries;
      })
    ).subscribe();
  }
}
