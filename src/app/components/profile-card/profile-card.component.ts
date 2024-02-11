import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {ClipboardModule} from '@angular/cdk/clipboard';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NgIf, ClipboardModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent implements OnInit {
  @Input() id!:string;
  @Input() name!: string;
  @Input() country!: string;
  @Input() city!: string;
  @Input() address!: string;
  @Input() phone?: string;
  @Input() website?: string;
  @Input() img?: string;

  protected randomNumber = Math.floor(Math.random() * 300) + 1;

  ngOnInit() {
    initFlowbite();
  }
}
