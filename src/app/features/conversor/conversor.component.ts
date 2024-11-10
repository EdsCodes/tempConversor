import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.scss'
})
export class ConversorComponent {
  celsiusValue: number | null = null;
  fahrenheitValue: number | null = null;

  convertFromCelsius(): void {
    if(this.celsiusValue !== null){
      this.fahrenheitValue = (this.celsiusValue * 9) / 5 + 32;
    } else {
      this.fahrenheitValue = null;
    }
  }

  convertFromFahrenheit(): void {
    if(this.fahrenheitValue !== null){
      this.celsiusValue = (this.fahrenheitValue - 32) * 5 / 9;
    } else {
      this.celsiusValue = null;
    }
  }
}
