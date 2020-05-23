import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousClassComponent } from './marvellous-class/marvellous-class.component';
import { ClassBindComponent } from './class-bind/class-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousClassComponent,
    ClassBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
