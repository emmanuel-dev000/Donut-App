import { Component, OnInit } from '@angular/core';
import { DonutCardComponent } from '../donut-card/donut-card.component';
import { NgFor, NgIf } from '@angular/common';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [
    DonutCardComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css'
})
export class DonutListComponent implements OnInit {
  donuts = [
    'Bavarian', 'Chocolate', 'Strawberry'
  ];

  input: string  = "";

  constructor(private donutService: DonutService) {}

  ngOnInit() {
    this.donutService.input$.subscribe(x => {
      this.input = x;
    });
  }

  showDonut(name : string) : boolean {
    if (this.input === '') {
      return true;
    }

    return name.includes(this.input);
  }
}
