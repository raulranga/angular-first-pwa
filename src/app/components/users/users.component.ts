import {Component, inject, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {MyDataServiceService} from "../../services/my-data-service.service";
import {UserModel} from "../../models/user.model";
import {NgForOf} from "@angular/common";
import {ProfileCardComponent} from "../profile-card/profile-card.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    ProfileCardComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  private dataService: MyDataServiceService = inject(MyDataServiceService);

  protected users!: UserModel[];
  constructor() {
  }
  ngOnInit() {
    this.dataService.getRandomUsers().pipe(
      tap((response) => {
        this.users = response['results'] as UserModel[];
      })
    ).subscribe();
  }
}
