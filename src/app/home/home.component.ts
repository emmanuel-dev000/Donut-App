import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  input : string = "";

  constructor(private donutService: DonutService) {}

  onInput() {
    // const input = e.target as HTMLInputElement;
    // console.log(input.value);
    this.donutService.updateInput(this.input);
  }
}
