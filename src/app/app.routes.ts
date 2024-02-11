import { Routes } from '@angular/router';

import { UsersComponent } from "./components/users/users.component";
import { BreweriesComponent } from "./components/breweries/breweries.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'breweries', component: BreweriesComponent },
    ]
  },
  { path: '**', component: AppComponent }
];
