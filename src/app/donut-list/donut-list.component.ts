import { Component } from '@angular/core';
import { DonutCardComponent } from '../donut-card/donut-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [
    DonutCardComponent,
    NgFor
  ],
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css'
})
export class DonutListComponent {
  donuts = [
    'Bavarian', 'Chocolate', 'Strawberry'
  ];
}
