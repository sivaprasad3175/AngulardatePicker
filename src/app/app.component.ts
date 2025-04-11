import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component'; // 👈 import this


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'custom-datepicker';
  selectedDate: string = ''; 
}
