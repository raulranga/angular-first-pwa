import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiEndpoints} from "../api/api";

import {BrewModel} from "../models/brew.model";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {
  private http = inject(HttpClient);
  private endpoints: ApiEndpoints;

  constructor() {
    this.endpoints = new ApiEndpoints();
  }

  public getBreweries() {
    return this.http.get<BrewModel[]>(this.endpoints.breweries)
  }

  public getRandomUsers() {
    return this.http.get<Record<string, unknown | UserModel[]>>(this.endpoints.randomUsers)
  }
}
