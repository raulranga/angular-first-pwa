import { Routes } from '@angular/router';

import { UsersComponent } from "./components/users/users.component";
import { BreweriesComponent } from "./components/breweries/breweries.component";

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'breweries', component: BreweriesComponent },

];
