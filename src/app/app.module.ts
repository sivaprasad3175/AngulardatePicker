import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component'; // 👈 import this

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent // 👈 declare it here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
